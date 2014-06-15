var ApplyButtonView = Backbone.View.extend({
    el: "#apply",

    initialize: function () {
        this.applyButtonClicked = false;
    },

    events: {
        "click": "apply_onclick",
    },

    apply_onclick: function () {
        var msg = '';
        checkboxList.each(function (ckbxItemModel) {
            var title = ckbxItemModel.get('title');
            var checked = ckbxItemModel.get('checked');
            var itemMsg = title + ':' + checked + '\n';
            msg += itemMsg;
        });
        alert(msg);
        this.applyButtonClicked = true;

        previousCheckboxModelArray.length = 0;
        checkboxList.each(function (ckbxItemModel) {
            previousCheckboxModelArray.push(ckbxItemModel.clone());
        });

        this.render();
        this.cancelButtonView.render();
    },

    render: function () {
        var applyEnabled = false;
        if (!this.applyButtonClicked) {
            applyEnabled = true;
        } else {
            applyEnabled = !this.previousStatusEqualsCurrent();
        }
        //this.$el.html(this.template({ applyDisabled: !applyEnabled }));
        this.el.disabled = !applyEnabled;

        return this;
    },

    previousStatusEqualsCurrent: function () {
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