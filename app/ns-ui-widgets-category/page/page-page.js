const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/page/page-creation/basics-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/page/page-creation/basics-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
