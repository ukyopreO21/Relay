checkPicked = [1,1,1,1,1,1,1,1,1,1];

var Arr =
["Khi xem lịch, bạn Việt thấy rằng trong một tháng nào đó ngày đầu tiên và ngày cuối tháng là ngày chủ nhật. Hỏi tháng đó là tháng mấy của năm?",
"Một cậu bé đang mơ thấy cậu đi đến một cây cầu, xung quanh không có ai ngoài một tên lừa đảo đứng ở đầu cầu. Hắn thấy cậu bé liền dụ dỗ: \"Tôi sẽ cho bạn gấp đôi số tài sản đang có mỗi lần qua cầu, nhưng sau mỗi lần bạn phải trả 96.000 đồng\". Cậu bé vì tham lam nên đã đồng ý. Chỉ sau 3 lần qua cầu thì cậu nhận ra vừa hết tiền và giật mình tỉnh dậy. Vậy trong mơ, cậu bé có bao nhiêu tiền?",
"Vào giữa thế kỉ XII, một nhà toán học Ấn Độ đã thiết kế một bánh xe chứa các khoang đựng thuỷ ngân lỏng. Ông cho rằng khi bánh xe quay, thuỷ ngân sẽ luôn chảy về đáy của các khoang, khiến cho một phía bánh xe luôn luôn nặng hơn phía còn lại. Sự mất cân bằng đó sẽ khiến nó quay không ngừng nghỉ. Bản vẽ của ông là một trong các thiết kế lâu đời nhất về ý tưởng này nhưng nó không hề tồn tại trong thực tế. Ý tưởng đó là gì?",
"Năm 1850, nhằm cải tiến và chế tạo ống nhòm thế hệ mới, nhà phát minh người Italia Ignazio Porro đã sáng chế ra lăng kính Porro nhằm giúp đổi hướng quay của hình ảnh. Lăng kính này hoạt động được nhờ vào cơ chế của hiện tượng vật lí nào?",
"Acid nitric trong cơn dông được sinh ra và rơi xuống đất kết hợp với nhiều khoáng chất cung cấp dinh dưỡng cho cây hấp thụ phần lớn dưới dạng 2 ion nào?",
"Vào tháng 8/2022 vừa qua, tiến sĩ Dư Hoàng Long cùng các cộng sự của mình tại đại học Monash (Australia) đã công bố một quy trình mới giúp điều chế hợp chất nào với hiệu suất đạt gần 100% - cao hơn quy trình Haber - Bosch đang được áp dụng trong công nghiệp - bằng cách khử điện hoá khí nitrogen?",
"Cuốn nhật ký ghi chép về cuộc sống nơi chiến trường của nữ bác sĩ, liệt sĩ nào từng suýt bị người lính Mỹ ném vào lửa, nhưng người phiên dịch đã khuyên anh ta “Đừng đốt, vì trong đó đã có lửa rồi!”?",
"Trong đoạn kết của truyện ngắn Vợ nhặt của nhà văn Kim Lân có câu: \“Trong óc Tràng vẫn thấy đám người đói và lá cờ đỏ bay phấp phới…\” Lá cờ đỏ ở đây để chỉ tổ chức nào lúc bấy giờ và sự kiện nào đã diễn ra với sự lãnh đạo của chính tổ chức này?",
"Today, chess is a popular sport all over the world. Some people think it was invented in Russia or China. In fact, it was invented in an Asian country. In which country did it originate?",
"The Four Great Inventions of Acient China including paper, compass and what else?",
"Trong tế bào thực vật, bào quan nào hình thành từ hệ thống các túi dẹt hình dĩa và nhiều túi cầu nhỏ, có chức năng tổng hợp các polysaccharide phức tạp cần thiết cho sự hình thành thành tế bào?",
"Enzyme telomerase là một loại enzyme xúc tác việc kéo dài đầu mút NST qua đó phục hồi lại chiều dài ADN ban đầu. Phân tích tế bào của bệnh nhân mắc nhóm bệnh X, người ta tìm thấy enzyme trên hoạt động rất mạnh, khiến số lần phân bào ở các tế bào xôma không bị giảm đi, các tế bào gây bệnh X không chết nên chúng có thể phân chia liên tục. Hãy cho biết X là nhóm bệnh nào?",
"Tại Army Games 2021, Hải quân Nhân dân Việt Nam đã đem tới hai chiến hạm 015 và 016. Điều đặc biệt ở hai chiến hạm này là chúng còn mang tên của hai vị anh hùng trong lịch sử Việt Nam. Một người là nhà chính trị và quân sự tài ba dưới thời Trần. Sau đó, ông được phong lên làm \"Quốc công tiết chế\". Chiến hạm còn lại được lấy tên một vị vua ở thế kỉ 18 mà các đời hoàng đế nhà Nguyễn đều coi ông là \"giặc\" trong các tài liệu triều đình. Hãy cho biết lần lượt tên của hai anh hùng nói trên?",
"Vị hoàng đế nào của nhà Nguyễn ở thế kỷ XIX đã cho lập nhà Dưỡng tế ở các tỉnh để giúp đỡ những người nghèo khổ, tàn tật, già cả không nơi nương tựa?",
"Đường dây 500kV Bắc - Nam (mạch 1) là một trong những công trình quan trọng bậc nhất của nước ta. Hãy cho biết nó đi qua những thành phố trực thuộc Trung ương nào?",
"Lá thư gửi thế hệ năm 2100 là một sản phẩm tập thể đã được chọn lựa từ ý hay, lời đẹp, được viết thành 2 bản: tiếng Việt và tiếng Nga. Những dòng thư được viết ra là những cảm xúc, tình cảm chân thật nhất, cảm động nhất của những người đã bỏ công sức hàng năm trời để kiến tạo nên đập của thuỷ điện này. Mai sau, khi thế hệ trẻ đọc lá thư sẽ biết rằng ngày xưa, lớp cha ông đã lao động như thế nào. Hãy cho biết thuỷ điện nào là nơi cất giữ lá thư đó?",
"Pikachu vừa treo 4 chiếc đồng hồ lên 4 bức tường trong phòng cậu ấy. Tất cả đồng hồ đều hoạt động bình thường nhưng lại chạy sớm hoặc trễ vài phút so với giờ đúng. Chiếc đồng hồ thứ nhất chạy sai 2 phút, chiếc thứ hai chạy sai 3 phút, tương tự chiếc thứ ba là 4 và chiếc cuối cùng là 5 phút. Vào một lúc nào đó, Pikachu vào phòng bất chợt và muốn biết mấy giờ. Cô nhìn lên và thấy 4 đồng hồ chỉ 2 giờ 54 phút, 2 giờ 57 phút, 3 giờ 2 phút, 3 giờ 3 phút (số giờ không theo thứ tự đồng hồ). Hỏi giờ đúng là bao nhiêu?",
"Lịch Can Chi (tên đầy đủ là Thiên Can Địa Chi) thường được người dân Á Đông sử dụng trong việc tính hệ thống lịch pháp, chiêm tinh học và một số ngành học thuật. Thập nhị Chi gồm: Tí, Sửu, Dần, Mão, Thìn, Tị, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi. Thập Can gồm: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý. Người ta ghép một Can với một Chi theo chu kỳ để tạo thành tên gọi chính thức. Được biết năm 2023 là năm Quý Mão, hãy cho biết năm 2075 là năm gì?",
"Cố Tổng Bí thư Nguyễn Văn Linh từng giải thích về bút danh N.V.L. của mình có ý nghĩa là gì?",
"Hiện tại, nước ta có ba thành phố trực thuộc tỉnh (đơn vị hành chính cấp huyện) có ba chữ trong tên. Điều thú vị là ba thành phố này, mỗi thành phố lại nằm ở mỗi miền Bắc - Trung - Nam. Hãy cho biết đó là ba thành phố nào?"
]

var d = 0;

var index

var numberQuest

document.getElementById("Subject").style.visibility = "hidden";
document.getElementById("Start").style.visibility = "hidden";
document.getElementById("ques1").style.visibility = "hidden";
document.getElementById("ques2").style.visibility = "hidden";
document.getElementById("menu").style.visibility = "hidden";

function hideSubject(){
    document.getElementById("Subject").style.visibility = "hidden";
}

var showSubject = new Audio("TSHienCacLinhVuc.mp3");

var intro = document.getElementById("intro");
document.getElementById("intro").style.visibility = "hidden";

var playTime15s = document.getElementById("ques1");
var playTime20s = document.getElementById("ques2");

var selectSubject = new Audio("TSChonLinhVuc.mp3");

var openAnswer = new Audio("TSMoDapAnThiSinh.mp3");

var Math = ["",""];

function Start(){
    document.getElementById("Start").style.visibility = "hidden";
    var startRound = new Audio("VCNVBatDauVongThi.mp3");
    startRound.play();
    setTimeout(subject, 8000);
}

function playIntro(){
    document.getElementById("playIntro").style.visibility = "hidden";
    document.getElementById("intro").style.visibility = "visible";
    document.getElementById("Start").style.visibility = "hidden";
    intro.play();
    setTimeout(closeIntro, 6500);
}

function closeIntro(){
    document.getElementById("intro").style.visibility = "hidden";
    document.getElementById("Start").style.visibility = "visible";
}

function subject(){
    document.getElementById("Subject").style.visibility = "visible";
    showSubject.play();
}

function openQuestion(subject){
    index = subject.name;
    selectSubject.play();
    document.getElementById(index).style.visibility = 'hidden';
    checkPicked[index] = 0;
    //setTimeout(hideSubject, 5000);
    setTimeout(questioning, 7000);
}

function questioning(){
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("ques1").style.visibility = "visible";
    document.getElementById("nextQuestion").style.visibility = "visible";
}

function reShowSubject(){
    showSubject.play();
    for (var i=0; i<=9; i++){
        if (checkPicked[i] == 1) document.getElementById(i).style.visibility = "visible"
        else document.getElementById(i).style.visibility = "hidden";
    }
}

function playTime1(){
    playTime15s.play();
}

function playTime2(){
    document.getElementById("ques1").style.visibility = "hidden";
    document.getElementById("ques2").style.visibility = "visible";
    playTime20s.play();
}

function nextQuestion(){
    numberQuest = 2*index + d;
    d++;
    document.getElementById("questionRange").innerHTML = Arr[numberQuest];
    if (d==2){
        document.getElementById("nextQuestion").style.visibility = "hidden";
        d=0;
    }
}

function showAnswer(){
    openAnswer.play();
}

function RightAns(){
    var rightAnswer = new Audio("TSDung.mp3");
    rightAnswer.play()
}

function WrongAns(){
    var wrongAnswer = new Audio("TSSai.mp3");
    wrongAnswer.play()
}

function backSubject(){
    document.getElementById("questionRange").innerHTML = " ";
    reShowSubject();
    document.getElementById("ques1").style.visibility = "hidden";
    document.getElementById("ques2").style.visibility = "hidden";
    document.getElementById("menu").style.visibility = "hidden";
}

function pause(){
    playTime15s.pause();
    playTime20s.pause();
}