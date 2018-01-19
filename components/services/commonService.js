app.service('commonService',[function () {
    var confirmItem;
    this.setConfirmItems = function (data) {
        confirmItem = data;
    };
    this.getConfirmItems = function () {
      return confirmItem;
    }
}]);