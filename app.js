// brew install imagemagick
// brew install graphicsmagick
// npm install gm --save-dev
// npm install wrench --save-dev
// npm install fs-extra --save-dev

// Add subfolders and or image files jpeg, gif, png into from folder
var fs = require('fs-extra');
var wrench = require('wrench');
var gm = require('gm')

fs.copySync('from', 'to', function (err){
  if (err) console.log(err);
})

var files = wrench.readdirSyncRecursive('to');

files.forEach(function(file, i, self){
  gm('to/' + file).identify(function(err, value){
    if(value.format === 'JPEG' || value.format === 'GIF' || value.format === 'PNG'){
      if(value.size.width > 415){
        gm('to/' + file).resize(415).write('to/' + file, function (err){
          if(!err) console.log('to/'+ file + ' 변환성공!')
        })
      }
    }
  })
})
