//var previousCheckboxModelArray = [];

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

    renderSubController: function () {
        this.checkboxAllView.render();
        this.applyButtonView.render();
        this.cancelButtonView.render();
    },

    initialize: function () {
        console.log("initialize");

        this.render();

        this.checkboxAllView = new CheckboxAllView();
        this.applyButtonView = new ApplyButtonView();
        this.cancelButtonView = new CancelButtonView();
        this.applyButtonView.cancelButtonView = this.cancelButtonView;//TODO:

        var rCkbxItemModel = new CheckBoxItemModel({ title: 'Red', checked: true });
        var gCkbxItemModel = new CheckBoxItemModel({ title: 'Green', checked: true });
        var bCkbxItemModel = new CheckBoxItemModel({ title: 'Blue', checked: true });
        checkboxList.reset([rCkbxItemModel, gCkbxItemModel, bCkbxItemModel]);

        var that = this;
        checkboxList.each(function (ckbxItemModel) {
            var view = new CheckboxItemView({ model: ckbxItemModel });
            view.parent = that;
            $('#checkboxList').append(view.render().el);
            previousCheckboxList.push(ckbxItemModel.clone());
        });
    },

    ss: 'xx',


});