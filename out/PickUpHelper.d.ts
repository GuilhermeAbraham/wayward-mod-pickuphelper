import { IContainer } from "@wayward/game/game/item/IItem";
import Message from "@wayward/game/language/dictionary/Message";
import Mod from "@wayward/game/mod/Mod";
import Bindable from "@wayward/game/ui/input/Bindable";
export default class PickUpHelper extends Mod {
    readonly messagePickupNoItems: Message;
    readonly bindablePuhShowContainer: Bindable;
    openPickUpHelperContainer(): boolean;
    showContainerDialog(container: IContainer): void;
}
