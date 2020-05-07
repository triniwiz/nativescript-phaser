import { Frame } from 'tns-core-modules/ui/frame';
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}


function goTo(menu) {
    switch (menu) {
        case "goToFlappyBird":
            Frame.topmost().navigate("examples/games/flappybird/flappybird");
            break;
        case "goToBreakOut":
            Frame.topmost().navigate("examples/games/breakout/breakout");
            break;
            case "goToStart":
                Frame.topmost().navigate("examples/start/start");
                break;
                case "goToMuy":
                    Frame.topmost().navigate("examples/animation/muybridge/muybridge");
                    break;
        default:
            break;
    }
}

export function goToFlappyBird(menu) {
    goTo("goToFlappyBird");
}

export function goToBreakOut(menu) {
    goTo("goToBreakOut");
}

export function goToStart(menu){
    goTo("goToStart")
}

export function goToMuy(menu){
    goTo("goToMuy")
}
