/**
 * Create a multipart color ramp to concatenate multiple color ramps for use in the renderer
 * generated by the {@link module:esri/tasks/GenerateRendererTask GenerateRendererTask}. After creating a new MultipartColorRamp object you can
 * add algorithmic color ramps using the addRamp method. The MultipartColorRamp will try to use
 * an equal number of colors from each member ramp to create its colors.
 *
 * @module esri/tasks/support/MultipartColorRamp
 * @since 4.0
 */
define(
[
  "../../core/declare",
  "dojo/_base/array",

  "./ColorRamp"
],
function(
  declare, array,
  ColorRamp
) {

  /**
   * @extends module:esri/tasks/support/ColorRamp
   * @constructor module:esri/tasks/support/MultipartColorRamp
   * @param {Object} properties - See the [properties](#properties) for a list of all the properties
   *                              that may be passed into the constructor.
   */
  var MultipartColorRamp = declare(ColorRamp,
  /** @lends module:esri/tasks/support/MultipartColorRamp.prototype */
  {

    declaredClass: "esri.tasks.MultipartColorRamp",

    /**
    * Define an array of algorithmic color ramps used to generate the multi part ramp.
    * 
    * @type {module:esri/tasks/support/AlgorithmicColorRamp[]}
    */
    colorRamps: [],

    /**
    * A string value representing the color ramp type. This value is always `multipart`.
    * 
    * @type {string}
    * @default
    */
    type: "multipart",

    toJson: function() {
      try {
        throw new Error("toJson is deprecated, use toJSON instead");
      }
      catch (e) {
        console.warn(e.stack);
      }

      return this.toJSON();
    },

    /**
     * Returns an easily serializable object representation of a multipart color ramp.
     * 
     * @return {Object} A JSON representation of a multipart color ramp.
     * @private
     */
    toJSON: function() {
      var colorRampsJson = array.map(this.colorRamps, function(colorRamp){return colorRamp.toJSON();});
      var json = {type: "multipart", colorRamps: colorRampsJson};
      return json;
    }

});

  return MultipartColorRamp;
});