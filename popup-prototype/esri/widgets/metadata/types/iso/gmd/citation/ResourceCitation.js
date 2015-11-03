define(["../../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../../base/Descriptor",
        "../../../../form/Element",
        "../../../../form/iso/AbstractObject",
        "../../../../form/iso/GcoElement",
        "../../../../form/iso/ObjectReference",
        "./CI_Date",
        "./ResourceIdentifier",
        "dojo/text!./templates/ResourceCitation.html",
        "../../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, AbstractObject, GcoElement, ObjectReference, CI_Date,
  ResourceIdentifier, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});