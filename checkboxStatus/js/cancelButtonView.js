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
        _.each(previousCheckboxModelArray, function (ckbxItemModel) {
            var title = ckbxItemModel.get("title");
            var checked = ckbxItemModel.get("checked");
            var item = checkboxList.findWhere({ title: title });
            if (!_.isNull(item)) {
                item.set("checked", checked);
            }
        });
    },

    render: function () {
        this.el.disabled = this.previousStatusEqualsCurrent();
        return this;
    },

    previousStatusEqualsCurrent: function () {//TODO
        var isEqual = true;
        for (var ckbxItemModel in previousCheckboxModelArray) {
            var title = previousCheckboxModelArray[ckbxItemModel].get("title");
            var checked = previousCheckboxModelArray[ckbxItemModel].get("checked");
            var item = checkboxList.findWhere({ title: title });
            if (_.isNull(item)) {
                return false;
            }
            if (item.get("checked") != checked) {
                return false;
            }
        }
        return isEqual;
    },

});