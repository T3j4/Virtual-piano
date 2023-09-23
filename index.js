$(document).ready(function () {
    const audioFiles = {
        C: 'sounds/C.mp3',
        Csharp: 'sounds/Csharp.mp3',
        D: 'sounds/D.mp3',
        Dsharp: 'sounds/Dsharp.mp3',
        E: 'sounds/E.mp3',
        F: 'sounds/F.mp3',
        Fsharp: 'sounds/Fsharp.mp3',
        G: 'sounds/G.mp3',
        Gsharp: 'sounds/Gsharp.mp3',
        A: 'sounds/A.mp3',
        Asharp: 'sounds/Asharp.mp3',
        B: 'sounds/B.mp3',
    };

    $('button').click(function () {
        const note = $(this).data('note');
        const audio = new Audio(audioFiles[note]);
        audio.play();
    });

    $(document).keydown(function (event) {
        const keyToNote = {
            KeyA: 'C',
            KeyS: 'D',
            KeyD: 'E',
            KeyF: 'F',
            KeyG: 'G',
            KeyH: 'A',
            KeyJ: 'B',
            KeyK: 'Csharp',
            KeyL: 'Dsharp',
            Semicolon: 'Fsharp',
            KeyW: 'Csharp',
            KeyE: 'Dsharp',
            KeyT: 'Fsharp',
            KeyY: 'Gsharp',
            KeyU: 'Asharp',
        };

        const note = keyToNote[event.code];
        if (note) {
            const audio = new Audio(audioFiles[note]);
            audio.play();
        }
    });
});
