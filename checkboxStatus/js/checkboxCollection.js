var CheckboxCollection = Backbone.Collection.extend({
    model: CheckBoxItemModel,
});

//TODO:
var checkboxList = new CheckboxCollection();
var previousCheckboxList = new CheckboxCollection();

function previousStatusEqualsCurrent() {
    var isEqual = true;

    var previousModels = previousCheckboxList.models;
    for (var ckbxItemModel in previousModels) {

        var title = previousModels[ckbxItemModel].get("title");
        var checked = previousModels[ckbxItemModel].get("checked");
        var item = checkboxList.findWhere({ title: title });
        if (_.isNull(item)) {
            return false;
        }
        if (item.get("checked") != checked) {
            return false;
        }
    }
    return isEqual;
}