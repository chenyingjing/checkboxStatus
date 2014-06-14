CheckBoxItemModel = Backbone.Model.extend({
    defaults: {
        title: '',
        checked: false,
    },

    checkboxToggle: function () {
        this.set('checked', !this.get('checked'));
    },
});