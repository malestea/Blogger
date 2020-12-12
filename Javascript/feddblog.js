 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVrWDMXZT_oA3HU8UN9jnwTEQq40UugjE",
    authDomain: "codingert.firebaseapp.com",
    databaseURL: "https://codingert.firebaseio.com",
    projectId: "codingert",
    storageBucket: "codingert.appspot.com",
    messagingSenderId: "261794982657",
    appId: "1:261794982657:web:7be2ce27b7e4b208"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ! function() {
    Array.prototype.remove = function() {
        for (var e, t, i = arguments, o = i.length; o && this.length;)
            for (e = i[--o]; - 1 !== (t = this.indexOf(e));) this.splice(t, 1);
        return this
    };
    var e = document.createElement("script");
    e.src = "https://www.gstatic.com/firebasejs/4.9.0/firebase.js", e.onload = function() {
        firebase.initializeApp({
            apiKey: "AIzaSyAVrWDMXZT_oA3HU8UN9jnwTEQq40UugjE",
    authDomain: "codingert.firebaseapp.com",
    databaseURL: "https://codingert.firebaseio.com",
    projectId: "codingert",
    storageBucket: "codingert.appspot.com",
    messagingSenderId: "261794982657",
    appId: "1:261794982657:web:7be2ce27b7e4b208"
            }),
            function(e) {
                for (var t = document.getElementsByClassName("survey"), i = 0, o = t[i]; i < t.length; i++) {
                    var a = o.getAttribute("data-id"),
                        r = JSON.parse(localStorage.getItem("liked")) || [],
                        c = 0,
                        d = 0;

                    //like
                    e.ref("suka/" + a + "/like").on("value", function(e) {
                        -1 !== r.indexOf(a) && o.querySelector('.yes').classList.add('active'), c = e.val() || 0, o.querySelector(".like").innerText = c
                    }), o.querySelector(".yes").addEventListener("click", function() {
o.querySelector('.yes').classList.toggle('active'), o.querySelector('.yes').classList.contains('active') ? (r.push(a), localStorage.setItem("liked", JSON.stringify(r)), c++) : (r.remove(a), localStorage.setItem("liked", JSON.stringify(r)), c--), e.ref("suka/" + a + "/like")
                    .set(c)
                    });
                    
                    // dislike
                    
                    e.ref("suka/" + a + "/dislike").on("value", function(e) {
                        -1 !== r.indexOf(a) && o.querySelector('.no').classList.add('active'), d = e.val() || 0, o.querySelector(".dislike").innerText = d
                    }), o.querySelector(".no").addEventListener("click", function() {
o.querySelector('.no').classList.toggle('active'), o.querySelector('.no').classList.contains('active') ? (r.push(a), localStorage.setItem("liked", JSON.stringify(r)), d++) : (r.remove(a), localStorage.setItem("liked", JSON.stringify(r)), d--), e.ref("suka/" + a + "/dislike")
                    .set(d)
                    });

                }
                
            }(firebase.database())
    }, document.body.append(e)
}();
