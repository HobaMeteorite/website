
function getAccount() {
    solana.connect().then((x) => {
    console.log(x.publicKey.toString()),
    $(".disconnect").css("display", "block"),
    $(".connect").css("display", "none"),
    $(".user-wallet").css("display", "block"),
    $(".user-wallet-id").html(x.publicKey.toString());
    })
}

function disconnectAccount() {
    window.solana.disconnect();
    window.solana.on('disconnect', () => console.log("disconnected!"),
    $(".disconnect").css("display", "none"),
    $(".connect").css("display", "block"),
    $(".user-wallet").css("display", "none"),
    );
}