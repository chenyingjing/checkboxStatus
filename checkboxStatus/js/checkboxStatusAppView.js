var checkboxStatusAppView = Backbone.View.extend({
    el: "#checkboxStatusApp",
    template: _.template($("#checkboxListAppTemplate").html()),
    render: function () {
        this.$el.html(this.template({isAll: true}));
        return this;
    },
    events: {
        "click #apply": "apply_onclick",
        "click #cancel": "cancel_onclick",
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
        this.previousCheckboxModelArray.length = 0;
        var thisPreviousCheckboxModelArray = this.previousCheckboxModelArray;
        checkboxList.each(function (ckbxItemModel) {
            thisPreviousCheckboxModelArray.push(ckbxItemModel.clone());
        });
    },

    cancel_onclick: function () {
        //alert("cancel");
        _.each(this.previousCheckboxModelArray, function (ckbxItemModel) {
            var title = ckbxItemModel.get("title");
            var checked = ckbxItemModel.get("checked");
            var item = checkboxList.findWhere({ title: title });
            if (!_.isNull(item)) {
                item.set("checked", checked);
            }
        });
    },

    initialize: function () {
        console.log("initialize");
        this.render();

        var checkboxAllView = new CheckboxAllView();

        var rCkbxItemModel = new CheckBoxItemModel({ title: 'Red', checked: true });
        var gCkbxItemModel = new CheckBoxItemModel({ title: 'Green', checked: true });
        var bCkbxItemModel = new CheckBoxItemModel({ title: 'Blue', checked: true });
        checkboxList.reset([rCkbxItemModel, gCkbxItemModel, bCkbxItemModel]);
        this.previousCheckboxModelArray = [];
        var thisPreviousCheckboxModelArray = this.previousCheckboxModelArray;
        checkboxList.each(function (ckbxItemModel) {
            var view = new CheckboxItemView({ model: ckbxItemModel });
            view.checkboxAllView = checkboxAllView;
            $('#checkboxList').append(view.render().el);
            thisPreviousCheckboxModelArray.push(ckbxItemModel.clone());
        });
    },
});