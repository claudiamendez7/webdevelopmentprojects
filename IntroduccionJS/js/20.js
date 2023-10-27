// Property Methods

const stereo = {
    play : function(id) {
        console.log (`Playing song with ID: ${id}`);
    },
    pause: function() {
        console.log('Pausing...');
    },
    // Create a playlist 
    createPlaylist: function(name) {
        console.log(`Creating playlist: ${name}`);
    },
    playPlaylist: function(name) {
        console.log(`Playing playlist: ${name}`);
    },
}

stereo.deleteSong = function (id) {
    console.log(`Deleting song: ${id}`);
}

stereo.play(3840);
stereo.pause();
stereo.deleteSong(20);
stereo.createPlaylist('kpop');
stereo.playPlaylist('kpop')
