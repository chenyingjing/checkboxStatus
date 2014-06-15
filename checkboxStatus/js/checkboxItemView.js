﻿var CheckboxItemView = Backbone.View.extend({
    events: {
        "click input": "checkboxToggle",
    },

    template: _.template($("#checkboxItemTemplate").html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    checkboxToggle: function () {
        this.model.checkboxToggle();
    },

    initialize: function () {
        this.model.on('change', this.onchanged, this);
    },

    onchanged: function () {
        //alert(1);
        this.render();
        this.checkboxAllView.render();
        this.applyButtonView.render();
        this.cancelButtonView.render();
    },
});