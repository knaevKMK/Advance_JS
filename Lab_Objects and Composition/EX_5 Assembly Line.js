
function createAssemblyLine() {
    const assemblyLine = {
        hasClima: function (myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function () {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp +=1;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp -= 1;
                }
            }
        },

        hasAudio: function (myCar) {
            myCar.currentTrack = {
                name: 'Never Gonna Give You Up',
                artist: 'Rick Astley'
            };
            myCar.nowPlaying = function () {
                console.log(`Now playing ${myCar.currentTrack.artist} by ${myCar.currentTrack.artist}`);
            };
        },


        hasParktronic: function (myCar) {
            myCar.checkDistance = function (distance) {
                let rule = "";
                if (distance < 0.1) {
                    rule = "Beep! Beep! Beep!";
                } else if (distance < 0.25) {
                    rule = "Beep! Beep!";
                } else if (distance < 0.5) {
                    rule = "Beep!";
                }
                console.log(rule);

            }
        }
    }
    return assemblyLine;
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
console.log(myCar);





assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

//21
//20

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

//Now playing 'Never Gonna Give You Up' by Rick Astley

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

// Beep!
// Beep! Beep!


console.log(myCar);

// {
//     make: 'Toyota',
//     model: 'Avensis',
//     temp: 20,
//     tempSettings: 18,
//     adjustTemp: [Function],
//     currentTrack: {
//       name: 'Never Gonna Give You Up',
//       artist: 'Rick Astley'
//     },
//     nowPlaying: [Function],
// checkDistance: [Function]
// }

