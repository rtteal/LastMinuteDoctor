'use strict';

angular.module('lastMinuteDoctor.version', [
  'lastMinuteDoctor.version.interpolate-filter',
  'lastMinuteDoctor.version.version-directive'
])

.value('version', '0.1');
