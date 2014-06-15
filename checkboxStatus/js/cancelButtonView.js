var CancelButtonView = Backbone.View.extend({
    el: "#cancel",

    initialize: function () {
        this.el.disabled = true;
    },

    events: {
        "click": "cancel_onclick",
    },

    cancel_onclick: function () {
        this.parent.cancelTheStatus();
    },

    render: function () {
        this.el.disabled = this.parent.previousStatusEqualsCurrent();
        return this;
    },

});