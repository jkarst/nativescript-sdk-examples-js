"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var list = [];
    for (var i = 0; i < 15; i++) {
        list.push(new Date());
    }
    var viewModel = observable_1.fromObject({
        items: list
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhaW4tb2JqZWN0LWJpbmRpbmctdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWluLW9iamVjdC1iaW5kaW5nLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBeUU7QUFHekUsd0JBQStCLElBQWU7SUFDMUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUUvQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBTSxTQUFTLEdBQUcsdUJBQVUsQ0FBQztRQUN6QixLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3BDLENBQUM7QUFiRCx3Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHBsYWluLW9iamVjdC1iaW5kaW5nLWNvZGUtdHNcbmltcG9ydCB7IGZyb21PYmplY3QsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgbGlzdC5wdXNoKG5ldyBEYXRlKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IGZyb21PYmplY3Qoe1xuICAgICAgICBpdGVtczogbGlzdFxuICAgIH0pO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cbi8vIDw8IHBsYWluLW9iamVjdC1iaW5kaW5nLWNvZGUtdHNcbiJdfQ==