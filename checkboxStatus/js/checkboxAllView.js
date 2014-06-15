var CheckboxAllView = Backbone.View.extend({
    el: "#checkboxAll",
    template: _.template($("#checkboxAllTemplate").html()),
    render: function () {
        var isAll = this.parent.isAllSelected();

        this.$el.html(this.template({ isAll: isAll }));
        return this;
    },

    events: {
        "click": "checkboxAll_onclick",
    },

    checkboxAll_onclick: function () {
        this.parent.selectAll();
    },
});
