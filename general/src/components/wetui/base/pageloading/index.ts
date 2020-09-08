let pageLoading = (time:number) =>{
    let top = 180;
    if(time - 0.5 <=0){
        time = 0
    }
    $('#wet-pageloading .wave_mask').css({
        transition: `top ${time}s linear`,
        top:`-${top}px`,
    })
    let time_count = setTimeout(()=>{
        $('#wet-pageloading .circle_inner').css({
            transform: 'scale(1.6)',
        })
        $('#wet-pageloading .ball').hide();
        $('#wet-pageloading .wave').css({
            backgroundImage: `url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzY0JyBoZWlnaHQ9JzY0Jz48cGF0aCBkPSdNMjExLjU2OTc3OCA0NDkuNzA2NjY3YTU2Ljg4ODg4OSA1Ni44ODg4ODkgMCAxIDAtODEuODA2MjIyIDc5LjA3NTU1NWwyNDIuMjMyODg4IDI1MC4zMTExMTFhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMCA4MS44MDYyMjMgMGw0NDAuNDMzNzc3LTQ1NS4xMTExMTFhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMC04MS44MDYyMjItNzkuMDc1NTU1bC0zOTkuNTMwNjY2IDQxMi44NDI2NjYtMjAxLjM4NjY2Ny0yMDguMDQyNjY2eicgZmlsbD0nI2ZmZmZmZic+PC9wYXRoPjwvc3ZnPg==")`
        })
        let step_1 = setTimeout(()=>{
            $('#wet-pageloading .circle_inner').css({
                transform: 'scale(1.3)'
            })
            clearTimeout(step_1)
        },500)
        let step_2 = setTimeout(()=>{
            $('#wet-pageloading .circle_inner').css({
                transform: 'scale(1.8)'
            })
            clearTimeout(step_2)
        },1000)
        let step_3 = setTimeout(() => {
            $('#wet-pageloading').fadeOut();
            clearTimeout(step_3)
        }, 1500);
        clearTimeout(time_count)
    },time*1000)
}

export default pageLoading
