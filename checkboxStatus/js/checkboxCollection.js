var CheckboxCollection = Backbone.Collection.extend({
    model: CheckBoxItemModel,
});
var checkboxList = new CheckboxCollection();