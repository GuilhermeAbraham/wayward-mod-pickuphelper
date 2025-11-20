import { MessageType, Source } from "@wayward/game/game/entity/player/IMessageManager";
import { IContainer } from "@wayward/game/game/item/IItem";
import Message from "@wayward/game/language/dictionary/Message";
import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import Bind from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import { IInput } from "@wayward/game/ui/input/IInput";
import { Bound } from "@wayward/utilities/Decorators";

// This mod uses a keybind instead of an action, so we don't need to register an action for all possible tiles.
export default class PickUpHelper extends Mod {
    // Create the two error messages
    @Register.message("PickupNoItems")
    public readonly messagePickupNoItems: Message;

    // Create the bindable for the pickup action
    @Register.bindable("PuhShowContainer", IInput.key("KeyG"))
    public readonly bindablePuhShowContainer: Bindable;

    // Bind the pickup helper action to the key press
    @Bind.onDown(Registry<PickUpHelper>().get("bindablePuhShowContainer"))
    public openPickUpHelperContainer(): boolean {
        // Get the tile the player is facing
        const facingTile = localPlayer.tile.getTileInDirection(localPlayer.facingDirection);

        // Check if no tile or the tile is empty
        if (
            facingTile === undefined ||
            facingTile.containedItems === undefined ||
            (facingTile.containedItems && facingTile.containedItems.length === 0)
        ) {
            // Send an error message and return false
            localPlayer.messages.source(Source.Meta).type(MessageType.Bad).send(this.messagePickupNoItems);
            return false;
        }

        // Check if the tile the player is facing is on fire and if so, burn the player
        if (facingTile.isOnFire) {
            localPlayer.burn(2);
        }

        // Open the container the player is facing
        this.showContainerDialog(facingTile.tileContainer as IContainer);

        return true;
    }

    @Bound
    public showContainerDialog(container: IContainer): void {
        gameScreen?.openContainerDialog(container, container);
    }
}
