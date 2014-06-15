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

        previousCheckboxList.reset();
        checkboxList.each(function (ckbxItemModel) {
            previousCheckboxList.push(ckbxItemModel.clone());
        });

        this.render();
        this.cancelButtonView.render();
    },

    render: function () {
        var applyEnabled = false;
        if (!this.applyButtonClicked) {
            applyEnabled = true;
        } else {
            applyEnabled = !previousStatusEqualsCurrent();
        }
        //this.$el.html(this.template({ applyDisabled: !applyEnabled }));
        this.el.disabled = !applyEnabled;

        return this;
    },



});