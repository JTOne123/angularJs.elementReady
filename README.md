angularJs.elementReady
======================

AngularJs: Bind Events to Changing DOM

Very often there is a situation when you need to bind the event to an element after angular will render the page. 
For example: to bind any jQuery plugin for your input[type=text]

How to use:

Html:
<pre><code>	
	&lt;input type="text" class="input-medium datePicker" ng-model="selectedItem.searchVal._to" on-element-ready="initDatePicker"/&gt;
</code></pre>

Controller:
<pre><code>
	   scope.initDatePicker = function (element) {
                    element
                    .datepicker({ format: config.dateFormat })
                    .on('changeDate', function (ev) {
						.......
					});
</code></pre>