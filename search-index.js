var searchIndex = {};
searchIndex['rscam'] = {"items":[[0,"","rscam","Fast wrapper for v4l2.",null,null],[3,"Config","","",null,null],[12,"interval","","The mix of numerator and denominator. v4l2 uses frame intervals instead of frame rates.\nDefault is `(1, 10)`.",0,null],[12,"resolution","","Width and height of frame.\nDefault is `(640, 480)`.",0,null],[12,"format","","FourCC of format (e.g. `b\"RGB3\"`). Note that case matters.\nDefault is `b\"YUYV\"`.",0,null],[12,"field","","Storage method of interlaced video.\nDefault is `Field::None` (progressive).",0,null],[12,"nbuffers","","Number of buffers in the queue of camera.\nDefault is `2`.",0,null],[3,"FormatInfo","","",null,null],[12,"format","","FourCC of format (e.g. `b\"H264\"`).",1,null],[12,"description","","Information about the format.",1,null],[12,"compressed","","Raw or compressed.",1,null],[12,"emulated","","Whether it's transcoded from a different input format.",1,null],[3,"Frame","","",null,null],[12,"resolution","","Width and height of the frame.",2,null],[12,"format","","FourCC of the format.",2,null],[3,"Camera","","",null,null],[4,"Error","","",null,null],[13,"Io","","I/O error when using the camera.",3,null],[13,"BadInterval","","Unsupported frame interval.",3,null],[13,"BadResolution","","Unsupported resolution (width and/or height).",3,null],[13,"BadFormat","","Unsupported format of pixel.",3,null],[13,"BadField","","Unsupported field.",3,null],[4,"Field","","[Details](http://linuxtv.org/downloads/v4l-dvb-apis/field-order.html#v4l2-field).",null,null],[13,"None","","",4,null],[13,"Top","","",4,null],[13,"Bottom","","",4,null],[13,"Interplaced","","",4,null],[13,"SeqTB","","",4,null],[13,"SeqBT","","",4,null],[13,"Alternate","","",4,null],[13,"InterplacedTB","","",4,null],[13,"InterplacedBT","","",4,null],[4,"ResolutionInfo","","",null,null],[13,"Discretes","","",5,null],[13,"Stepwise","","",5,null],[12,"min","rscam::ResolutionInfo","",5,null],[12,"max","","",5,null],[12,"step","","",5,null],[4,"IntervalInfo","rscam","",null,null],[13,"Discretes","","",6,null],[13,"Stepwise","","",6,null],[12,"min","rscam::IntervalInfo","",6,null],[12,"max","","",6,null],[12,"step","","",6,null],[5,"new","rscam","Alias for `Camera::new()`.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[6,"Result","","",null,null],[11,"fmt","","",3,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"clone","","",4,{"inputs":[{"name":"field"}],"output":{"name":"field"}}],[11,"default","","",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"fmt","","",1,{"inputs":[{"name":"formatinfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"resolutioninfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"intervalinfo"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Target","","",null,null],[11,"deref","","",2,null],[11,"drop","","",2,{"inputs":[{"name":"frame"}],"output":null}],[11,"new","","",7,{"inputs":[{"name":"camera"},{"name":"str"}],"output":{"name":"result"}}],[11,"formats","","Get detailed info about the available formats.",7,{"inputs":[{"name":"camera"}],"output":{"name":"result"}}],[11,"resolutions","","Get detailed info about the available resolutions.",7,null],[11,"intervals","","Get detailed info about the available intervals.",7,null],[11,"start","","Start streaming.",7,{"inputs":[{"name":"camera"},{"name":"config"}],"output":{"name":"result"}}],[11,"capture","","Blocking request of frame.\nIt dequeues buffer from a driver, which will be enqueueed after destructing `Frame`.",7,{"inputs":[{"name":"camera"}],"output":{"name":"result"}}],[11,"stop","","Stop streaming. Otherwise it's called after destructing `Camera`.",7,{"inputs":[{"name":"camera"}],"output":{"name":"result"}}],[11,"drop","","",7,{"inputs":[{"name":"camera"}],"output":null}]],"paths":[[3,"Config"],[3,"FormatInfo"],[3,"Frame"],[4,"Error"],[4,"Field"],[4,"ResolutionInfo"],[4,"IntervalInfo"],[3,"Camera"]]};
initSearch(searchIndex);
