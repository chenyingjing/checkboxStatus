var previousCheckboxModelArray = [];

var checkboxStatusAppView = Backbone.View.extend({
    el: "#checkboxStatusApp",
    template: _.template($("#checkboxListAppTemplate").html()),
    render: function () {
        this.$el.html(this.template());
        return this;
    },


    events: {
       // "click #apply": "apply_onclick",
        //"click #cancel": "cancel_onclick",
    },


    initialize: function () {
        console.log("initialize");

        this.render();

        var checkboxAllView = new CheckboxAllView();
        var applyButtonView = new ApplyButtonView();
        var cancelButtonView = new CancelButtonView();
        applyButtonView.cancelButtonView = cancelButtonView;

        var rCkbxItemModel = new CheckBoxItemModel({ title: 'Red', checked: true });
        var gCkbxItemModel = new CheckBoxItemModel({ title: 'Green', checked: true });
        var bCkbxItemModel = new CheckBoxItemModel({ title: 'Blue', checked: true });
        checkboxList.reset([rCkbxItemModel, gCkbxItemModel, bCkbxItemModel]);
        checkboxList.each(function (ckbxItemModel) {
            var view = new CheckboxItemView({ model: ckbxItemModel });
            view.checkboxAllView = checkboxAllView;//TODO:
            view.applyButtonView = applyButtonView;
            view.cancelButtonView = cancelButtonView;
            $('#checkboxList').append(view.render().el);
            previousCheckboxModelArray.push(ckbxItemModel.clone());
        });
    },
});