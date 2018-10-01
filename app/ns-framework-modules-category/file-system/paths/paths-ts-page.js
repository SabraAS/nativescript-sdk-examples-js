"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var documentsFolder = file_system_1.knownFolders.documents();
    var currentAppFolder = file_system_1.knownFolders.currentApp();
    var tempFolder = file_system_1.knownFolders.temp();
    var testPath = "///test.txt";
    vm.set("documents", file_system_1.path.normalize(documentsFolder.path + testPath));
    vm.set("currentApp", file_system_1.path.normalize(currentAppFolder.path + testPath));
    vm.set("temp", file_system_1.path.normalize(tempFolder.path + testPath));
    documentsFolder = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(documentsFolder.path, "myFiles", "test.txt");
    console.log(filePath);
    var separator = file_system_1.path.separator;
    console.log(separator);
    var folderPath = file_system_1.path.join(file_system_1.knownFolders.documents().path, "music");
    var folder = file_system_1.Folder.fromPath(folderPath);
    console.log(folder);
    vm.set("textContentToBeSaved", "");
    vm.set("savedContent", "");
    vm.set("isContentSaved", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSaveContentToFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var documentsFolder = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(documentsFolder.path, "FileFromPath.txt");
    var file = file_system_1.File.fromPath(filePath);
    file.writeText(vm.get("textContentToBeSaved"))
        .then(function (result) {
        file.readText().then(function (res) {
            vm.set("isContentSaved", true);
            vm.set("savedContent", res);
            console.log("File content:  " + res);
        });
    }).catch(function (err) {
        console.log(err.stack);
    });
}
exports.onSaveContentToFile = onSaveContentToFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aHMtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdGhzLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFDOUQsNERBQWdGO0FBRWhGLHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFHNUIsSUFBSSxlQUFlLEdBQW1CLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0QsSUFBTSxnQkFBZ0IsR0FBRywwQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25ELElBQU0sVUFBVSxHQUFHLDBCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdkMsSUFBTSxRQUFRLEdBQVcsYUFBYSxDQUFDO0lBRXZDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGtCQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2RSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFJM0QsZUFBZSxHQUFXLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkQsSUFBTSxRQUFRLEdBQVcsa0JBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUl0QixJQUFNLFNBQVMsR0FBRyxrQkFBSSxDQUFDLFNBQVMsQ0FBQztJQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBR3ZCLElBQU0sVUFBVSxHQUFXLGtCQUFJLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdFLElBQU0sTUFBTSxHQUFtQixvQkFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVoQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBdkNELHdDQXVDQztBQUVELDZCQUFvQyxJQUFJO0lBQ3BDLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFL0IsSUFBTSxlQUFlLEdBQW1CLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakUsSUFBTSxRQUFRLEdBQVcsa0JBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdFLElBQU0sSUFBSSxHQUFTLGtCQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRzNDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3pDLElBQUksQ0FBQyxVQUFDLE1BQU07UUFFVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUVyQixFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLEdBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRVgsQ0FBQztBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIHBhdGgsIEZvbGRlciwgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gICAgLy8gPj4gZnMtcGF0aHMtbm9ybWFsaXplLWNvZGUtdHNcbiAgICBsZXQgZG9jdW1lbnRzRm9sZGVyOiBGb2xkZXIgPSA8Rm9sZGVyPmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICBjb25zdCBjdXJyZW50QXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBjb25zdCB0ZW1wRm9sZGVyID0ga25vd25Gb2xkZXJzLnRlbXAoKTtcblxuICAgIGNvbnN0IHRlc3RQYXRoOiBzdHJpbmcgPSBcIi8vL3Rlc3QudHh0XCI7XG4gICAgLy8gR2V0IGEgbm9ybWFsaXplZCBwYXRoIHN1Y2ggYXMgPGZvbGRlci5wYXRoPi90ZXN0LnR4dCBmcm9tIDxmb2xkZXIucGF0aD4vLy90ZXN0LnR4dFxuICAgIHZtLnNldChcImRvY3VtZW50c1wiLCBwYXRoLm5vcm1hbGl6ZShkb2N1bWVudHNGb2xkZXIucGF0aCArIHRlc3RQYXRoKSk7XG4gICAgdm0uc2V0KFwiY3VycmVudEFwcFwiLCBwYXRoLm5vcm1hbGl6ZShjdXJyZW50QXBwRm9sZGVyLnBhdGggKyB0ZXN0UGF0aCkpO1xuICAgIHZtLnNldChcInRlbXBcIiwgcGF0aC5ub3JtYWxpemUodGVtcEZvbGRlci5wYXRoICsgdGVzdFBhdGgpKTtcbiAgICAvLyA8PCBmcy1wYXRocy1ub3JtYWxpemUtY29kZS10c1xuICAgIC8vID4+IGZzLXBhdGhzLWpvaW4tY29kZS10c1xuICAgIC8vIEdlbmVyYXRlIGEgcGF0aCBsaWtlIDxkb2N1bWVudHMucGF0aD4vbXlGaWxlcy90ZXN0LnR4dFxuICAgIGRvY3VtZW50c0ZvbGRlciA9IDxGb2xkZXI+a25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBwYXRoLmpvaW4oZG9jdW1lbnRzRm9sZGVyLnBhdGgsIFwibXlGaWxlc1wiLCBcInRlc3QudHh0XCIpO1xuICAgIC8vIDw8IGZzLXBhdGhzLWpvaW4tY29kZS10c1xuICAgIGNvbnNvbGUubG9nKGZpbGVQYXRoKTtcblxuICAgIC8vID4+IGZzLXBhdGhzLXNlcGFyYXRvci1jb2RlLXRzXG4gICAgLy8gQW4gT1MgZGVwZW5kZW50IHBhdGggc2VwYXJhdG9yLCBcIlxcXCIgb3IgXCIvXCIuXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gcGF0aC5zZXBhcmF0b3I7XG4gICAgLy8gPDwgZnMtcGF0aHMtc2VwYXJhdG9yLWNvZGUtdHNcbiAgICBjb25zb2xlLmxvZyhzZXBhcmF0b3IpO1xuXG4gICAgLy8gPj4gZnMtcGF0aHMtY3JlYXRlLWZvbGRlci1jb2RlLXRzXG4gICAgY29uc3QgZm9sZGVyUGF0aDogc3RyaW5nID0gcGF0aC5qb2luKGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoLCBcIm11c2ljXCIpO1xuICAgIGNvbnN0IGZvbGRlcjogRm9sZGVyID0gPEZvbGRlcj5Gb2xkZXIuZnJvbVBhdGgoZm9sZGVyUGF0aCk7XG4gICAgLy8gPDwgZnMtcGF0aHMtY3JlYXRlLWZvbGRlci1jb2RlLXRzXG4gICAgY29uc29sZS5sb2coZm9sZGVyKTtcblxuICAgIHZtLnNldChcInRleHRDb250ZW50VG9CZVNhdmVkXCIsIFwiXCIpO1xuICAgIHZtLnNldChcInNhdmVkQ29udGVudFwiLCBcIlwiKTtcbiAgICB2bS5zZXQoXCJpc0NvbnRlbnRTYXZlZFwiLCBmYWxzZSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNhdmVDb250ZW50VG9GaWxlKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgLy8gPj4gZnMtcGF0aHMtY3JlYXRlLWZpbGUtY29kZS10c1xuICAgIGNvbnN0IGRvY3VtZW50c0ZvbGRlcjogRm9sZGVyID0gPEZvbGRlcj5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IHBhdGguam9pbihkb2N1bWVudHNGb2xkZXIucGF0aCwgXCJGaWxlRnJvbVBhdGgudHh0XCIpO1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBGaWxlLmZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIC8vIFdyaXRpbmcgdGV4dCB0byB0aGUgZmlsZS5cbiAgICBmaWxlLndyaXRlVGV4dCh2bS5nZXQoXCJ0ZXh0Q29udGVudFRvQmVTYXZlZFwiKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gU3VjY2VlZGVkIHdyaXRpbmcgdG8gdGhlIGZpbGUuXG4gICAgICAgICAgICBmaWxlLnJlYWRUZXh0KCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3VjY2VlZGVkIHJlYWQgZnJvbSBmaWxlLlxuICAgICAgICAgICAgICAgIHZtLnNldChcImlzQ29udGVudFNhdmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZtLnNldChcInNhdmVkQ29udGVudFwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGaWxlIGNvbnRlbnQ6ICAke3Jlc31gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9KTtcbiAgICAvLyA8PCBmcy1wYXRocy1jcmVhdGUtZmlsZS1jb2RlLXRzXG59XG4iXX0=