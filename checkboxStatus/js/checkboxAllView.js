var CheckboxAllView = Backbone.View.extend({
    el: "#checkboxAll",
    template: _.template($("#checkboxAllTemplate").html()),
    render: function () {
        var isAll = checkboxList.every(function (item) {
            return item.get('checked');
        });
        this.$el.html(this.template({ isAll: isAll }));
        return this;
    },

    initialize: function () {
        this.render();
    },

    events: {
        "click": "checkboxAll_onclick",
    },

    checkboxAll_onclick: function () {
        checkboxList.each(function (ckbxItemModel) {
            ckbxItemModel.set('checked', true);
        });
    },
});
