/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 331.0, "minX": 0.0, "maxY": 2567.0, "series": [{"data": [[0.0, 331.0], [0.1, 331.0], [0.2, 333.0], [0.3, 333.0], [0.4, 333.0], [0.5, 334.0], [0.6, 334.0], [0.7, 334.0], [0.8, 334.0], [0.9, 334.0], [1.0, 334.0], [1.1, 334.0], [1.2, 335.0], [1.3, 335.0], [1.4, 336.0], [1.5, 336.0], [1.6, 336.0], [1.7, 337.0], [1.8, 337.0], [1.9, 337.0], [2.0, 338.0], [2.1, 338.0], [2.2, 338.0], [2.3, 339.0], [2.4, 339.0], [2.5, 339.0], [2.6, 339.0], [2.7, 341.0], [2.8, 341.0], [2.9, 341.0], [3.0, 344.0], [3.1, 344.0], [3.2, 345.0], [3.3, 345.0], [3.4, 345.0], [3.5, 346.0], [3.6, 346.0], [3.7, 346.0], [3.8, 346.0], [3.9, 346.0], [4.0, 346.0], [4.1, 347.0], [4.2, 347.0], [4.3, 347.0], [4.4, 347.0], [4.5, 348.0], [4.6, 348.0], [4.7, 348.0], [4.8, 348.0], [4.9, 348.0], [5.0, 348.0], [5.1, 349.0], [5.2, 349.0], [5.3, 349.0], [5.4, 349.0], [5.5, 349.0], [5.6, 350.0], [5.7, 350.0], [5.8, 350.0], [5.9, 350.0], [6.0, 350.0], [6.1, 351.0], [6.2, 351.0], [6.3, 351.0], [6.4, 351.0], [6.5, 351.0], [6.6, 352.0], [6.7, 352.0], [6.8, 352.0], [6.9, 353.0], [7.0, 353.0], [7.1, 353.0], [7.2, 353.0], [7.3, 354.0], [7.4, 354.0], [7.5, 354.0], [7.6, 354.0], [7.7, 355.0], [7.8, 355.0], [7.9, 355.0], [8.0, 355.0], [8.1, 355.0], [8.2, 356.0], [8.3, 356.0], [8.4, 356.0], [8.5, 356.0], [8.6, 356.0], [8.7, 356.0], [8.8, 356.0], [8.9, 356.0], [9.0, 356.0], [9.1, 356.0], [9.2, 356.0], [9.3, 356.0], [9.4, 356.0], [9.5, 356.0], [9.6, 356.0], [9.7, 357.0], [9.8, 357.0], [9.9, 357.0], [10.0, 358.0], [10.1, 358.0], [10.2, 358.0], [10.3, 358.0], [10.4, 358.0], [10.5, 358.0], [10.6, 358.0], [10.7, 358.0], [10.8, 358.0], [10.9, 358.0], [11.0, 358.0], [11.1, 358.0], [11.2, 358.0], [11.3, 359.0], [11.4, 359.0], [11.5, 359.0], [11.6, 359.0], [11.7, 359.0], [11.8, 360.0], [11.9, 360.0], [12.0, 360.0], [12.1, 360.0], [12.2, 360.0], [12.3, 360.0], [12.4, 360.0], [12.5, 360.0], [12.6, 360.0], [12.7, 360.0], [12.8, 360.0], [12.9, 360.0], [13.0, 361.0], [13.1, 361.0], [13.2, 361.0], [13.3, 361.0], [13.4, 361.0], [13.5, 361.0], [13.6, 361.0], [13.7, 361.0], [13.8, 362.0], [13.9, 362.0], [14.0, 362.0], [14.1, 362.0], [14.2, 362.0], [14.3, 362.0], [14.4, 362.0], [14.5, 363.0], [14.6, 363.0], [14.7, 363.0], [14.8, 363.0], [14.9, 363.0], [15.0, 363.0], [15.1, 363.0], [15.2, 363.0], [15.3, 363.0], [15.4, 363.0], [15.5, 363.0], [15.6, 363.0], [15.7, 363.0], [15.8, 363.0], [15.9, 363.0], [16.0, 363.0], [16.1, 363.0], [16.2, 363.0], [16.3, 364.0], [16.4, 364.0], [16.5, 364.0], [16.6, 364.0], [16.7, 364.0], [16.8, 364.0], [16.9, 364.0], [17.0, 364.0], [17.1, 365.0], [17.2, 365.0], [17.3, 365.0], [17.4, 365.0], [17.5, 365.0], [17.6, 365.0], [17.7, 365.0], [17.8, 365.0], [17.9, 365.0], [18.0, 365.0], [18.1, 365.0], [18.2, 365.0], [18.3, 365.0], [18.4, 366.0], [18.5, 366.0], [18.6, 366.0], [18.7, 366.0], [18.8, 366.0], [18.9, 366.0], [19.0, 366.0], [19.1, 366.0], [19.2, 367.0], [19.3, 367.0], [19.4, 367.0], [19.5, 367.0], [19.6, 367.0], [19.7, 367.0], [19.8, 367.0], [19.9, 367.0], [20.0, 367.0], [20.1, 367.0], [20.2, 367.0], [20.3, 367.0], [20.4, 367.0], [20.5, 367.0], [20.6, 367.0], [20.7, 368.0], [20.8, 368.0], [20.9, 368.0], [21.0, 368.0], [21.1, 368.0], [21.2, 368.0], [21.3, 368.0], [21.4, 368.0], [21.5, 369.0], [21.6, 369.0], [21.7, 369.0], [21.8, 369.0], [21.9, 369.0], [22.0, 369.0], [22.1, 369.0], [22.2, 369.0], [22.3, 369.0], [22.4, 369.0], [22.5, 370.0], [22.6, 370.0], [22.7, 370.0], [22.8, 370.0], [22.9, 370.0], [23.0, 370.0], [23.1, 370.0], [23.2, 370.0], [23.3, 370.0], [23.4, 370.0], [23.5, 371.0], [23.6, 371.0], [23.7, 371.0], [23.8, 371.0], [23.9, 371.0], [24.0, 371.0], [24.1, 371.0], [24.2, 371.0], [24.3, 371.0], [24.4, 371.0], [24.5, 371.0], [24.6, 371.0], [24.7, 371.0], [24.8, 371.0], [24.9, 371.0], [25.0, 371.0], [25.1, 371.0], [25.2, 371.0], [25.3, 371.0], [25.4, 371.0], [25.5, 371.0], [25.6, 371.0], [25.7, 371.0], [25.8, 371.0], [25.9, 371.0], [26.0, 371.0], [26.1, 372.0], [26.2, 372.0], [26.3, 372.0], [26.4, 372.0], [26.5, 372.0], [26.6, 372.0], [26.7, 372.0], [26.8, 372.0], [26.9, 372.0], [27.0, 372.0], [27.1, 372.0], [27.2, 373.0], [27.3, 373.0], [27.4, 373.0], [27.5, 373.0], [27.6, 373.0], [27.7, 373.0], [27.8, 373.0], [27.9, 373.0], [28.0, 373.0], [28.1, 373.0], [28.2, 373.0], [28.3, 373.0], [28.4, 374.0], [28.5, 374.0], [28.6, 374.0], [28.7, 374.0], [28.8, 374.0], [28.9, 374.0], [29.0, 374.0], [29.1, 374.0], [29.2, 374.0], [29.3, 374.0], [29.4, 374.0], [29.5, 374.0], [29.6, 374.0], [29.7, 374.0], [29.8, 374.0], [29.9, 374.0], [30.0, 374.0], [30.1, 374.0], [30.2, 374.0], [30.3, 374.0], [30.4, 374.0], [30.5, 374.0], [30.6, 374.0], [30.7, 374.0], [30.8, 375.0], [30.9, 375.0], [31.0, 375.0], [31.1, 375.0], [31.2, 375.0], [31.3, 375.0], [31.4, 375.0], [31.5, 375.0], [31.6, 375.0], [31.7, 375.0], [31.8, 375.0], [31.9, 375.0], [32.0, 375.0], [32.1, 375.0], [32.2, 375.0], [32.3, 375.0], [32.4, 375.0], [32.5, 375.0], [32.6, 375.0], [32.7, 375.0], [32.8, 376.0], [32.9, 376.0], [33.0, 376.0], [33.1, 376.0], [33.2, 376.0], [33.3, 376.0], [33.4, 376.0], [33.5, 376.0], [33.6, 376.0], [33.7, 376.0], [33.8, 376.0], [33.9, 377.0], [34.0, 377.0], [34.1, 377.0], [34.2, 377.0], [34.3, 377.0], [34.4, 377.0], [34.5, 377.0], [34.6, 377.0], [34.7, 377.0], [34.8, 377.0], [34.9, 377.0], [35.0, 377.0], [35.1, 378.0], [35.2, 378.0], [35.3, 378.0], [35.4, 378.0], [35.5, 378.0], [35.6, 378.0], [35.7, 378.0], [35.8, 378.0], [35.9, 378.0], [36.0, 378.0], [36.1, 378.0], [36.2, 378.0], [36.3, 378.0], [36.4, 378.0], [36.5, 378.0], [36.6, 378.0], [36.7, 378.0], [36.8, 378.0], [36.9, 378.0], [37.0, 378.0], [37.1, 378.0], [37.2, 378.0], [37.3, 378.0], [37.4, 379.0], [37.5, 379.0], [37.6, 379.0], [37.7, 379.0], [37.8, 379.0], [37.9, 379.0], [38.0, 379.0], [38.1, 379.0], [38.2, 379.0], [38.3, 379.0], [38.4, 379.0], [38.5, 379.0], [38.6, 379.0], [38.7, 379.0], [38.8, 379.0], [38.9, 379.0], [39.0, 379.0], [39.1, 379.0], [39.2, 379.0], [39.3, 380.0], [39.4, 380.0], [39.5, 380.0], [39.6, 380.0], [39.7, 380.0], [39.8, 380.0], [39.9, 380.0], [40.0, 380.0], [40.1, 380.0], [40.2, 380.0], [40.3, 380.0], [40.4, 380.0], [40.5, 380.0], [40.6, 380.0], [40.7, 380.0], [40.8, 380.0], [40.9, 380.0], [41.0, 380.0], [41.1, 380.0], [41.2, 380.0], [41.3, 380.0], [41.4, 380.0], [41.5, 381.0], [41.6, 381.0], [41.7, 381.0], [41.8, 381.0], [41.9, 381.0], [42.0, 381.0], [42.1, 381.0], [42.2, 381.0], [42.3, 381.0], [42.4, 381.0], [42.5, 381.0], [42.6, 381.0], [42.7, 381.0], [42.8, 381.0], [42.9, 382.0], [43.0, 382.0], [43.1, 382.0], [43.2, 382.0], [43.3, 382.0], [43.4, 382.0], [43.5, 382.0], [43.6, 382.0], [43.7, 382.0], [43.8, 382.0], [43.9, 382.0], [44.0, 382.0], [44.1, 382.0], [44.2, 382.0], [44.3, 382.0], [44.4, 382.0], [44.5, 382.0], [44.6, 382.0], [44.7, 383.0], [44.8, 383.0], [44.9, 383.0], [45.0, 383.0], [45.1, 383.0], [45.2, 383.0], [45.3, 383.0], [45.4, 383.0], [45.5, 383.0], [45.6, 383.0], [45.7, 383.0], [45.8, 383.0], [45.9, 383.0], [46.0, 383.0], [46.1, 383.0], [46.2, 383.0], [46.3, 383.0], [46.4, 384.0], [46.5, 384.0], [46.6, 384.0], [46.7, 384.0], [46.8, 384.0], [46.9, 384.0], [47.0, 384.0], [47.1, 384.0], [47.2, 384.0], [47.3, 384.0], [47.4, 384.0], [47.5, 384.0], [47.6, 384.0], [47.7, 384.0], [47.8, 384.0], [47.9, 384.0], [48.0, 384.0], [48.1, 384.0], [48.2, 384.0], [48.3, 384.0], [48.4, 384.0], [48.5, 384.0], [48.6, 384.0], [48.7, 384.0], [48.8, 384.0], [48.9, 384.0], [49.0, 385.0], [49.1, 385.0], [49.2, 385.0], [49.3, 386.0], [49.4, 386.0], [49.5, 386.0], [49.6, 386.0], [49.7, 386.0], [49.8, 386.0], [49.9, 386.0], [50.0, 386.0], [50.1, 386.0], [50.2, 386.0], [50.3, 386.0], [50.4, 386.0], [50.5, 386.0], [50.6, 386.0], [50.7, 386.0], [50.8, 386.0], [50.9, 386.0], [51.0, 386.0], [51.1, 386.0], [51.2, 386.0], [51.3, 387.0], [51.4, 387.0], [51.5, 387.0], [51.6, 387.0], [51.7, 387.0], [51.8, 387.0], [51.9, 387.0], [52.0, 387.0], [52.1, 388.0], [52.2, 388.0], [52.3, 388.0], [52.4, 388.0], [52.5, 388.0], [52.6, 388.0], [52.7, 388.0], [52.8, 388.0], [52.9, 388.0], [53.0, 388.0], [53.1, 389.0], [53.2, 389.0], [53.3, 389.0], [53.4, 389.0], [53.5, 389.0], [53.6, 389.0], [53.7, 389.0], [53.8, 389.0], [53.9, 389.0], [54.0, 389.0], [54.1, 389.0], [54.2, 390.0], [54.3, 390.0], [54.4, 390.0], [54.5, 390.0], [54.6, 390.0], [54.7, 390.0], [54.8, 390.0], [54.9, 390.0], [55.0, 390.0], [55.1, 390.0], [55.2, 390.0], [55.3, 390.0], [55.4, 391.0], [55.5, 391.0], [55.6, 391.0], [55.7, 391.0], [55.8, 391.0], [55.9, 391.0], [56.0, 392.0], [56.1, 392.0], [56.2, 392.0], [56.3, 392.0], [56.4, 392.0], [56.5, 392.0], [56.6, 392.0], [56.7, 392.0], [56.8, 393.0], [56.9, 393.0], [57.0, 393.0], [57.1, 393.0], [57.2, 393.0], [57.3, 394.0], [57.4, 394.0], [57.5, 394.0], [57.6, 394.0], [57.7, 394.0], [57.8, 394.0], [57.9, 394.0], [58.0, 394.0], [58.1, 394.0], [58.2, 394.0], [58.3, 394.0], [58.4, 394.0], [58.5, 394.0], [58.6, 395.0], [58.7, 395.0], [58.8, 395.0], [58.9, 395.0], [59.0, 395.0], [59.1, 396.0], [59.2, 396.0], [59.3, 396.0], [59.4, 396.0], [59.5, 397.0], [59.6, 397.0], [59.7, 397.0], [59.8, 397.0], [59.9, 397.0], [60.0, 397.0], [60.1, 398.0], [60.2, 398.0], [60.3, 398.0], [60.4, 398.0], [60.5, 398.0], [60.6, 398.0], [60.7, 398.0], [60.8, 399.0], [60.9, 399.0], [61.0, 399.0], [61.1, 399.0], [61.2, 399.0], [61.3, 399.0], [61.4, 400.0], [61.5, 400.0], [61.6, 400.0], [61.7, 400.0], [61.8, 400.0], [61.9, 400.0], [62.0, 400.0], [62.1, 401.0], [62.2, 401.0], [62.3, 401.0], [62.4, 401.0], [62.5, 401.0], [62.6, 401.0], [62.7, 401.0], [62.8, 401.0], [62.9, 402.0], [63.0, 402.0], [63.1, 403.0], [63.2, 403.0], [63.3, 403.0], [63.4, 403.0], [63.5, 403.0], [63.6, 404.0], [63.7, 404.0], [63.8, 404.0], [63.9, 404.0], [64.0, 404.0], [64.1, 404.0], [64.2, 406.0], [64.3, 406.0], [64.4, 406.0], [64.5, 406.0], [64.6, 406.0], [64.7, 406.0], [64.8, 406.0], [64.9, 407.0], [65.0, 407.0], [65.1, 407.0], [65.2, 407.0], [65.3, 407.0], [65.4, 407.0], [65.5, 407.0], [65.6, 407.0], [65.7, 408.0], [65.8, 408.0], [65.9, 408.0], [66.0, 408.0], [66.1, 408.0], [66.2, 408.0], [66.3, 409.0], [66.4, 409.0], [66.5, 409.0], [66.6, 409.0], [66.7, 409.0], [66.8, 409.0], [66.9, 409.0], [67.0, 409.0], [67.1, 409.0], [67.2, 409.0], [67.3, 409.0], [67.4, 409.0], [67.5, 410.0], [67.6, 411.0], [67.7, 411.0], [67.8, 411.0], [67.9, 411.0], [68.0, 411.0], [68.1, 411.0], [68.2, 411.0], [68.3, 412.0], [68.4, 412.0], [68.5, 412.0], [68.6, 412.0], [68.7, 412.0], [68.8, 414.0], [68.9, 414.0], [69.0, 414.0], [69.1, 414.0], [69.2, 414.0], [69.3, 415.0], [69.4, 415.0], [69.5, 415.0], [69.6, 415.0], [69.7, 415.0], [69.8, 415.0], [69.9, 416.0], [70.0, 416.0], [70.1, 416.0], [70.2, 416.0], [70.3, 416.0], [70.4, 416.0], [70.5, 416.0], [70.6, 417.0], [70.7, 417.0], [70.8, 417.0], [70.9, 418.0], [71.0, 418.0], [71.1, 418.0], [71.2, 418.0], [71.3, 418.0], [71.4, 419.0], [71.5, 419.0], [71.6, 419.0], [71.7, 421.0], [71.8, 421.0], [71.9, 421.0], [72.0, 421.0], [72.1, 421.0], [72.2, 422.0], [72.3, 422.0], [72.4, 422.0], [72.5, 422.0], [72.6, 422.0], [72.7, 423.0], [72.8, 423.0], [72.9, 423.0], [73.0, 423.0], [73.1, 423.0], [73.2, 423.0], [73.3, 423.0], [73.4, 427.0], [73.5, 427.0], [73.6, 427.0], [73.7, 427.0], [73.8, 427.0], [73.9, 427.0], [74.0, 428.0], [74.1, 428.0], [74.2, 428.0], [74.3, 428.0], [74.4, 429.0], [74.5, 430.0], [74.6, 430.0], [74.7, 430.0], [74.8, 431.0], [74.9, 431.0], [75.0, 434.0], [75.1, 434.0], [75.2, 436.0], [75.3, 438.0], [75.4, 438.0], [75.5, 438.0], [75.6, 438.0], [75.7, 439.0], [75.8, 441.0], [75.9, 441.0], [76.0, 448.0], [76.1, 448.0], [76.2, 449.0], [76.3, 450.0], [76.4, 450.0], [76.5, 451.0], [76.6, 451.0], [76.7, 451.0], [76.8, 454.0], [76.9, 454.0], [77.0, 454.0], [77.1, 454.0], [77.2, 454.0], [77.3, 456.0], [77.4, 456.0], [77.5, 457.0], [77.6, 457.0], [77.7, 457.0], [77.8, 458.0], [77.9, 458.0], [78.0, 462.0], [78.1, 463.0], [78.2, 463.0], [78.3, 464.0], [78.4, 464.0], [78.5, 464.0], [78.6, 468.0], [78.7, 468.0], [78.8, 469.0], [78.9, 470.0], [79.0, 470.0], [79.1, 470.0], [79.2, 470.0], [79.3, 473.0], [79.4, 484.0], [79.5, 484.0], [79.6, 493.0], [79.7, 493.0], [79.8, 498.0], [79.9, 499.0], [80.0, 499.0], [80.1, 501.0], [80.2, 502.0], [80.3, 502.0], [80.4, 504.0], [80.5, 504.0], [80.6, 505.0], [80.7, 512.0], [80.8, 512.0], [80.9, 518.0], [81.0, 518.0], [81.1, 523.0], [81.2, 534.0], [81.3, 534.0], [81.4, 545.0], [81.5, 545.0], [81.6, 551.0], [81.7, 557.0], [81.8, 557.0], [81.9, 558.0], [82.0, 567.0], [82.1, 567.0], [82.2, 570.0], [82.3, 570.0], [82.4, 588.0], [82.5, 590.0], [82.6, 590.0], [82.7, 594.0], [82.8, 594.0], [82.9, 599.0], [83.0, 615.0], [83.1, 615.0], [83.2, 639.0], [83.3, 639.0], [83.4, 649.0], [83.5, 658.0], [83.6, 658.0], [83.7, 659.0], [83.8, 674.0], [83.9, 674.0], [84.0, 717.0], [84.1, 717.0], [84.2, 721.0], [84.3, 723.0], [84.4, 723.0], [84.5, 735.0], [84.6, 735.0], [84.7, 755.0], [84.8, 768.0], [84.9, 768.0], [85.0, 781.0], [85.1, 781.0], [85.2, 786.0], [85.3, 790.0], [85.4, 790.0], [85.5, 791.0], [85.6, 791.0], [85.7, 791.0], [85.8, 798.0], [85.9, 798.0], [86.0, 800.0], [86.1, 802.0], [86.2, 802.0], [86.3, 806.0], [86.4, 806.0], [86.5, 809.0], [86.6, 812.0], [86.7, 812.0], [86.8, 813.0], [86.9, 813.0], [87.0, 814.0], [87.1, 815.0], [87.2, 815.0], [87.3, 817.0], [87.4, 821.0], [87.5, 821.0], [87.6, 821.0], [87.7, 821.0], [87.8, 822.0], [87.9, 824.0], [88.0, 824.0], [88.1, 824.0], [88.2, 824.0], [88.3, 824.0], [88.4, 826.0], [88.5, 826.0], [88.6, 828.0], [88.7, 828.0], [88.8, 829.0], [88.9, 829.0], [89.0, 829.0], [89.1, 830.0], [89.2, 830.0], [89.3, 830.0], [89.4, 832.0], [89.5, 832.0], [89.6, 833.0], [89.7, 833.0], [89.8, 833.0], [89.9, 833.0], [90.0, 833.0], [90.1, 834.0], [90.2, 834.0], [90.3, 834.0], [90.4, 835.0], [90.5, 835.0], [90.6, 835.0], [90.7, 836.0], [90.8, 836.0], [90.9, 836.0], [91.0, 836.0], [91.1, 836.0], [91.2, 837.0], [91.3, 837.0], [91.4, 837.0], [91.5, 839.0], [91.6, 839.0], [91.7, 843.0], [91.8, 843.0], [91.9, 843.0], [92.0, 845.0], [92.1, 845.0], [92.2, 845.0], [92.3, 845.0], [92.4, 846.0], [92.5, 847.0], [92.6, 847.0], [92.7, 847.0], [92.8, 849.0], [92.9, 849.0], [93.0, 851.0], [93.1, 851.0], [93.2, 852.0], [93.3, 853.0], [93.4, 853.0], [93.5, 854.0], [93.6, 854.0], [93.7, 855.0], [93.8, 856.0], [93.9, 856.0], [94.0, 859.0], [94.1, 859.0], [94.2, 862.0], [94.3, 862.0], [94.4, 862.0], [94.5, 863.0], [94.6, 867.0], [94.7, 867.0], [94.8, 870.0], [94.9, 870.0], [95.0, 870.0], [95.1, 871.0], [95.2, 871.0], [95.3, 878.0], [95.4, 878.0], [95.5, 883.0], [95.6, 894.0], [95.7, 894.0], [95.8, 895.0], [95.9, 895.0], [96.0, 901.0], [96.1, 957.0], [96.2, 957.0], [96.3, 957.0], [96.4, 962.0], [96.5, 962.0], [96.6, 971.0], [96.7, 971.0], [96.8, 1016.0], [96.9, 1069.0], [97.0, 1069.0], [97.1, 1132.0], [97.2, 1132.0], [97.3, 1262.0], [97.4, 1272.0], [97.5, 1272.0], [97.6, 1277.0], [97.7, 1277.0], [97.8, 1286.0], [97.9, 1396.0], [98.0, 1396.0], [98.1, 1749.0], [98.2, 1761.0], [98.3, 1761.0], [98.4, 1786.0], [98.5, 1786.0], [98.6, 1816.0], [98.7, 1821.0], [98.8, 1821.0], [98.9, 1841.0], [99.0, 1841.0], [99.1, 1877.0], [99.2, 1919.0], [99.3, 1919.0], [99.4, 1936.0], [99.5, 1936.0], [99.6, 1975.0], [99.7, 1986.0], [99.8, 1986.0], [99.9, 2567.0]], "isOverall": false, "label": "Soap Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 375.0, "series": [{"data": [[600.0, 6.0], [2500.0, 1.0], [700.0, 12.0], [800.0, 61.0], [900.0, 5.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 4.0], [300.0, 375.0], [1300.0, 1.0], [400.0, 114.0], [1700.0, 3.0], [1800.0, 4.0], [1900.0, 4.0], [500.0, 18.0]], "isOverall": false, "label": "Soap Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 489.0, "series": [{"data": [[0.0, 489.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 110.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.967105263157895, "minX": 1.76812998E12, "maxY": 5.0, "series": [{"data": [[1.76812998E12, 5.0], [1.76813004E12, 4.967105263157895]], "isOverall": false, "label": "Number of Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76813004E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 855.0, "series": [{"data": [[4.0, 351.0], [2.0, 821.0], [1.0, 855.0], [5.0, 489.9373970345963], [3.0, 358.0]], "isOverall": false, "label": "Soap Request", "isController": false}, {"data": [[4.983633387888707, 490.633387888707]], "isOverall": false, "label": "Soap Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2822.133333333333, "minX": 1.76812998E12, "maxY": 3860.9, "series": [{"data": [[1.76812998E12, 3860.9], [1.76813004E12, 3824.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76812998E12, 2849.983333333333], [1.76813004E12, 2822.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76813004E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 483.20846905537456, "minX": 1.76812998E12, "maxY": 498.1315789473683, "series": [{"data": [[1.76812998E12, 483.20846905537456], [1.76813004E12, 498.1315789473683]], "isOverall": false, "label": "Soap Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76813004E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 483.12377850162846, "minX": 1.76812998E12, "maxY": 498.08552631578937, "series": [{"data": [[1.76812998E12, 483.12377850162846], [1.76813004E12, 498.08552631578937]], "isOverall": false, "label": "Soap Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76813004E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76812998E12, "maxY": 6.612377850162868, "series": [{"data": [[1.76812998E12, 6.612377850162868], [1.76813004E12, 0.0]], "isOverall": false, "label": "Soap Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76813004E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 331.0, "minX": 1.76812998E12, "maxY": 2567.0, "series": [{"data": [[1.76812998E12, 2567.0], [1.76813004E12, 1919.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76812998E12, 824.0], [1.76813004E12, 845.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76812998E12, 1971.8800000000006], [1.76813004E12, 1839.9999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76812998E12, 851.3999999999999], [1.76813004E12, 892.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76812998E12, 331.0], [1.76813004E12, 337.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76812998E12, 379.0], [1.76813004E12, 394.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76813004E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 377.0, "minX": 1.0, "maxY": 1173.0, "series": [{"data": [[1.0, 971.0], [8.0, 413.5], [4.0, 434.0], [9.0, 389.0], [10.0, 380.0], [11.0, 377.0], [6.0, 1173.0], [12.0, 383.5], [13.0, 393.0], [7.0, 438.0], [14.0, 405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 377.0, "minX": 1.0, "maxY": 1173.0, "series": [{"data": [[1.0, 968.0], [8.0, 413.5], [4.0, 434.0], [9.0, 389.0], [10.0, 380.0], [11.0, 377.0], [6.0, 1173.0], [12.0, 383.5], [13.0, 393.0], [7.0, 438.0], [14.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.983333333333333, "minX": 1.76812998E12, "maxY": 5.2, "series": [{"data": [[1.76812998E12, 5.2], [1.76813004E12, 4.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76813004E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.066666666666666, "minX": 1.76812998E12, "maxY": 5.116666666666666, "series": [{"data": [[1.76812998E12, 5.116666666666666], [1.76813004E12, 5.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76813004E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.066666666666666, "minX": 1.76812998E12, "maxY": 5.116666666666666, "series": [{"data": [[1.76812998E12, 5.116666666666666], [1.76813004E12, 5.066666666666666]], "isOverall": false, "label": "Soap Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76813004E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.066666666666666, "minX": 1.76812998E12, "maxY": 5.116666666666666, "series": [{"data": [[1.76812998E12, 5.116666666666666], [1.76813004E12, 5.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76813004E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

