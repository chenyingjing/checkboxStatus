var ApplyButtonView = Backbone.View.extend({
    el: "#apply",

    initialize: function () {
        this.applyButtonClicked = false;
    },

    events: {
        "click": "apply_onclick",
    },

    apply_onclick: function () {
        this.parent.showCurrentStatus();//TODO
        this.applyButtonClicked = true;
        this.parent.copyCurrentToPrevious();
        this.render();
        this.cancelButtonView.render();
    },

    render: function () {
        var applyEnabled = false;
        if (!this.applyButtonClicked) {
            applyEnabled = true;
        } else {
            applyEnabled = !this.parent.previousStatusEqualsCurrent();
        }
        this.el.disabled = !applyEnabled;

        return this;
    },



});