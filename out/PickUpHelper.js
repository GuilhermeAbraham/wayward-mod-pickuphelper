var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/entity/player/IMessageManager", "@wayward/game/mod/Mod", "@wayward/game/mod/ModRegistry", "@wayward/game/ui/input/Bind", "@wayward/game/ui/input/IInput"], function (require, exports, IMessageManager_1, Mod_1, ModRegistry_1, Bind_1, IInput_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PickUpHelper extends Mod_1.default {
        openPickUpHelperContainer() {
            const facingTile = localPlayer.tile.getTileInDirection(localPlayer.facingDirection);
            if (facingTile === undefined ||
                facingTile.containedItems === undefined ||
                facingTile.containedItems && facingTile.containedItems.length === 0) {
                localPlayer.messages.source(IMessageManager_1.Source.Meta).type(IMessageManager_1.MessageType.Bad)
                    .send(this.messagePickupNoItems);
                return false;
            }
            if (facingTile.isOnFire) {
                localPlayer.burn(2);
            }
            const openContainer = gameScreen?.openContainerDialog(facingTile.tileContainer);
            return openContainer !== false;
        }
    }
    exports.default = PickUpHelper;
    __decorate([
        ModRegistry_1.default.message("PickupNoItems")
    ], PickUpHelper.prototype, "messagePickupNoItems", void 0);
    __decorate([
        ModRegistry_1.default.bindable("PuhShowContainer", IInput_1.IInput.key("KeyG"))
    ], PickUpHelper.prototype, "bindablePuhShowContainer", void 0);
    __decorate([
        Bind_1.default.onDown((0, ModRegistry_1.Registry)().get("bindablePuhShowContainer"))
    ], PickUpHelper.prototype, "openPickUpHelperContainer", null);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja1VwSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BpY2tVcEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFRQSxNQUFxQixZQUFhLFNBQVEsYUFBRztRQVdsQyx5QkFBeUI7WUFFNUIsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFHcEYsSUFBSSxVQUFVLEtBQUssU0FBUztnQkFDeEIsVUFBVSxDQUFDLGNBQWMsS0FBSyxTQUFTO2dCQUN2QyxVQUFVLENBQUMsY0FBYyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUV0RSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyx3QkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQztxQkFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBR0QsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUdELE1BQU0sYUFBYSxHQUFHLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFaEYsT0FBTyxhQUFhLEtBQUssS0FBSyxDQUFDO1FBQ25DLENBQUM7S0FDSjtJQW5DRCwrQkFtQ0M7SUFoQ21CO1FBRGYscUJBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDOzhEQUNZO0lBSTlCO1FBRGYscUJBQVEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsZUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztrRUFDUDtJQUk1QztRQUROLGNBQUksQ0FBQyxNQUFNLENBQUMsSUFBQSxzQkFBUSxHQUFnQixDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2lFQXdCckUifQ==