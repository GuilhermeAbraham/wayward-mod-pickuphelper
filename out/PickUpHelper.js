var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/entity/player/IMessageManager", "@wayward/game/mod/Mod", "@wayward/game/mod/ModRegistry", "@wayward/game/ui/input/Bind", "@wayward/game/ui/input/IInput", "@wayward/utilities/Decorators"], function (require, exports, IMessageManager_1, Mod_1, ModRegistry_1, Bind_1, IInput_1, Decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PickUpHelper extends Mod_1.default {
        openPickUpHelperContainer() {
            const facingTile = localPlayer.tile.getTileInDirection(localPlayer.facingDirection);
            if (facingTile === undefined ||
                facingTile.containedItems === undefined ||
                (facingTile.containedItems && facingTile.containedItems.length === 0)) {
                localPlayer.messages.source(IMessageManager_1.Source.Meta).type(IMessageManager_1.MessageType.Bad).send(this.messagePickupNoItems);
                return false;
            }
            if (facingTile.isOnFire) {
                localPlayer.burn(2);
            }
            this.showContainerDialog(facingTile.tileContainer);
            return true;
        }
        showContainerDialog(container) {
            gameScreen?.openContainerDialog(container, container);
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
    __decorate([
        Decorators_1.Bound
    ], PickUpHelper.prototype, "showContainerDialog", null);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja1VwSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BpY2tVcEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQSxNQUFxQixZQUFhLFNBQVEsYUFBRztRQVdsQyx5QkFBeUI7WUFFNUIsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFHcEYsSUFDSSxVQUFVLEtBQUssU0FBUztnQkFDeEIsVUFBVSxDQUFDLGNBQWMsS0FBSyxTQUFTO2dCQUN2QyxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQ3ZFLENBQUM7Z0JBRUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQy9GLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFHRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBR0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUEyQixDQUFDLENBQUM7WUFFakUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUdNLG1CQUFtQixDQUFDLFNBQXFCO1lBQzVDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUQsQ0FBQztLQUNKO0lBekNELCtCQXlDQztJQXRDbUI7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7OERBQ1k7SUFJOUI7UUFEZixxQkFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tFQUNQO0lBSTVDO1FBRE4sY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFBLHNCQUFRLEdBQWdCLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUVBeUJyRTtJQUdNO1FBRE4sa0JBQUs7MkRBR0wifQ==