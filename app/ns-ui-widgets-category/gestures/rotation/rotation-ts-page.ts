
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout";
// >> gest-rotation-ts
import { RotationGestureEventData } from "tns-core-modules/ui/gestures";

export function onRotation(args: RotationGestureEventData) {
    console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Rotate angle: " + args.rotation + " state: " + args.state);
        // >> (hide)
        let grid = <GridLayout>args.object;
        const page = grid.page;
        const vm = page.bindingContext;
        vm.set("angle", args.rotation);
        vm.set("state", args.state);

        if (this.state === 3) {
            let grid = <GridLayout>args.object;
            grid.rotate = 0;
            grid.animate({
                rotate: args.rotation,
                duration: 200
            });
        }
        // << (hide)
}
// << gest-rotation-ts
export function onPageLoaded(args) {
    const page:Page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}