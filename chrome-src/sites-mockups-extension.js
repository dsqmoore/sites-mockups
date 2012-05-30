// Sites Mockups
/**
 * Sites Mockups (https://github.com/kennberg/sites-mockups)
 *
 * Copyright 2012 Alex Kennberg. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var sm = sm || {};

sm.start = function() {
  x$('.td-file').each(function(el, index, xui) {
    var td = x$(el);
    var a = td.find('a');
    if (a && a.length && a[0].href.indexOf('.png')) {
      td.setStyle('width', '300px');
      td.inner(td.html() + '<div><img src="' + a[0].href + '" /></div>');
    }
  });
};

sm.start();

