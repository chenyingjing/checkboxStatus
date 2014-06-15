var CancelButtonView = Backbone.View.extend({
    el: "#cancel",

    initialize: function () {
        this.el.disabled = true;
    },

    events: {
        "click": "cancel_onclick",
    },

    cancel_onclick: function () {
        //alert("cancel");
        previousCheckboxList.each(function (ckbxItemModel) {
            var title = ckbxItemModel.get("title");
            var checked = ckbxItemModel.get("checked");
            var item = checkboxList.findWhere({ title: title });
            if (!_.isNull(item)) {
                item.set("checked", checked);
            }
        });
        //_.each(previousCheckboxModelArray, function (ckbxItemModel) {
        //    var title = ckbxItemModel.get("title");
        //    var checked = ckbxItemModel.get("checked");
        //    var item = checkboxList.findWhere({ title: title });
        //    if (!_.isNull(item)) {
        //        item.set("checked", checked);
        //    }
        //});
    },

    render: function () {
        this.el.disabled = previousStatusEqualsCurrent();
        return this;
    },

});