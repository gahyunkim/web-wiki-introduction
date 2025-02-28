document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    // 댓글 불러오기 (localStorage에서)
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentList.innerHTML = ""; // 기존 리스트 초기화
        comments.forEach((comment, index) => addCommentToDOM(comment.name, comment.text, index));
    }

    // 댓글 DOM에 추가하는 함수
    function addCommentToDOM(visitorName, commentText, index) {
        const newComment = document.createElement("li");
        newComment.classList.add("comment-item");
        newComment.innerHTML = `
            <div class="comment-author">
                <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                <span class="comment-name">${visitorName}</span>
            </div>
            <div class="comment-content">${commentText}</div>
            <button class="delete-comment" data-index="${index}">삭제</button>
        `;

        // 삭제 버튼 이벤트 추가
        newComment.querySelector(".delete-comment").addEventListener("click", function() {
            deleteComment(index);
        });

        commentList.appendChild(newComment);
    }

    // 댓글 저장 (localStorage에 저장)
    function saveComment(visitorName, commentText) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ name: visitorName, text: commentText });
        localStorage.setItem("comments", JSON.stringify(comments));
        loadComments(); // 화면 갱신
    }

    // 댓글 삭제
    function deleteComment(index) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.splice(index, 1); // 해당 인덱스 댓글 삭제
        localStorage.setItem("comments", JSON.stringify(comments));
        loadComments(); // 화면 갱신
    }

    // 댓글 폼 제출 이벤트
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("comment-name");
        const commentInput = document.getElementById("comment-input");
        const visitorName = nameInput.value.trim() || "방문자"; // 기본값 "방문자"
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            saveComment(visitorName, commentText);
            nameInput.value = "";
            commentInput.value = "";
        }
    });

    // 페이지 로드 시 기존 댓글 불러오기
    loadComments();

    console.log(
        "%c" +
        " __      __  ______   __  __   ______     " +
        "\n" +
        "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
        "\n" +
        "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
        "\n" +
        " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
        "\n" +
        "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
        "\n" +
        "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
        "\n" +
        "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
        "color: #d81b60; font-size: 16px; font-weight: bold;"
    );

    console.log("알맞은 스크립트를 작성하세요");
});
