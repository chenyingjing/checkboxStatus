var checkboxStatusAppView = Backbone.View.extend({
    checkboxList: new CheckboxCollection(),
    previousCheckboxList: new CheckboxCollection(),

    previousStatusEqualsCurrent: function () {
        var isEqual = true;

        var previousModels = this.previousCheckboxList.models;
        for (var ckbxItemModel in previousModels) {

            var title = previousModels[ckbxItemModel].get("title");
            var checked = previousModels[ckbxItemModel].get("checked");
            var item = this.checkboxList.findWhere({ title: title });
            if (_.isNull(item)) {
                return false;
            }
            if (item.get("checked") != checked) {
                return false;
            }
        }
        return isEqual;
    },

    el: "#checkboxStatusApp",
    template: _.template($("#checkboxListAppTemplate").html()),
    render: function () {
        this.$el.html(this.template());
        return this;
    },

    renderSubController: function () {
        this.checkboxAllView.render();
        this.applyButtonView.render();
        this.cancelButtonView.render();
    },

    showCurrentStatus: function () {
        var msg = '';
        this.checkboxList.each(function (ckbxItemModel) {
            var title = ckbxItemModel.get('title');
            var checked = ckbxItemModel.get('checked');
            var itemMsg = title + ':' + checked + '\n';
            msg += itemMsg;
        });
        alert(msg);
    },

    copyCurrentToPrevious: function () {
        this.previousCheckboxList.reset();
        var thisPreviousCheckboxList = this.previousCheckboxList;
        this.checkboxList.each(function (ckbxItemModel) {
            thisPreviousCheckboxList.push(ckbxItemModel.clone());
        });
    },

    isAllSelected: function () {
        return this.checkboxList.every(function (item) {
            return item.get('checked');
        });
    },

    cancelTheStatus: function () {
        var that = this;
        this.previousCheckboxList.each(function (ckbxItemModel) {
            var title = ckbxItemModel.get("title");
            var checked = ckbxItemModel.get("checked");
            var item = that.checkboxList.findWhere({ title: title });
            if (!_.isNull(item)) {
                item.set("checked", checked);
            }
        });
    },

    selectAll: function () {
        this.checkboxList.each(function (ckbxItemModel) {
            ckbxItemModel.set('checked', true);
        });
    },

    initialize: function () {
        console.log("initialize");

        this.render();

        this.checkboxAllView = new CheckboxAllView();
        this.applyButtonView = new ApplyButtonView();
        this.cancelButtonView = new CancelButtonView();
        this.checkboxAllView.parent = this;
        this.checkboxAllView.render();
        this.applyButtonView.parent = this;
        this.cancelButtonView.parent = this;
        this.applyButtonView.cancelButtonView = this.cancelButtonView;//TODO:

        var rCkbxItemModel = new CheckBoxItemModel({ title: 'Red', checked: true });
        var gCkbxItemModel = new CheckBoxItemModel({ title: 'Green', checked: true });
        var bCkbxItemModel = new CheckBoxItemModel({ title: 'Blue', checked: true });
        this.checkboxList.reset([rCkbxItemModel, gCkbxItemModel, bCkbxItemModel]);

        var that = this;
        this.checkboxList.each(function (ckbxItemModel) {
            var view = new CheckboxItemView({ model: ckbxItemModel });
            view.parent = that;
            $('#checkboxList').append(view.render().el);
            that.previousCheckboxList.push(ckbxItemModel.clone());
        });
    },
});