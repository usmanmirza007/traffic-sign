import { images } from "../constant/images"
const type = {
  textQuestion: 'SIMPLE_QUESTION',
  questionWithImage: 'QUESTION_WITH_IMAGE',
  choiceWithImage: 'CHOICE_WITH_IMAGE'
}
export const trafficQuestions = [
  {
    "answers": [
      "Greenheart Games",
      "Greenland Games",
      "MomCorp",
      "The Tycoonists"
    ],
    "correctAnswer": "Greenheart Games",
    "question": "Which company developed and published Game Dev Tycoon?",
    "questionNumber": 0,
    "questionImage": null,
    "questionType": type.textQuestion
  },

  {
    "answers": [
      "Africa",
      "Asia",
      "North America",
      "South America"
    ],
    "correctAnswer": "North America",
    "question": "Where is the \"Sonoran Desert\" located?",
    "questionNumber": 1,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "Broken Authentication",
      "Cross-Site Scripting",
      "Injection ",
      "Insecure Direct Object References"
    ],
    "correctAnswer": "Injection ",
    "question": "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    "questionNumber": 2,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "False",
      "True"
    ],
    "correctAnswer": "True",
    "question": "Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.",
    "questionNumber": 3,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "1932",
      "1936",
      "1948",
      "1955"
    ],
    "correctAnswer": "1936",
    "question": "What year did the television company BBC officially launch the channel BBC One?",
    "questionNumber": 4,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "Casablanca",
      "Citizen Kane",
      "The Maltese Falcon",
      "The Treasure of the Sierra Madre"
    ],
    "correctAnswer": "Casablanca",
    "question": "In which film does Humphrey Bogart say the famous line, \"Here's looking at you, kid\"?",
    "questionNumber": 5,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "Afternoon",
      "Evening",
      "Midnight",
      "Morning"
    ],
    "correctAnswer": "Midnight",
    "question": "In the movie Gremlins, after what time of day should you not feed Mogwai?",
    "questionNumber": 6,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "Abraham Lincoln",
      "Benjamin Franklin",
      "George Washington",
      "Thomas Jefferson"
    ],
    "correctAnswer": "Benjamin Franklin",
    "question": "Who is depicted on the US hundred dollar bill?",
    "questionNumber": 7,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "False",
      "True"
    ],
    "correctAnswer": "False",
    "question": "In the webcomic Homestuck, the first character introduced is Dave Strider.",
    "questionNumber": 8,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "Abigail ",
      "Elliott",
      "Haley",
      "Lewis"
    ],
    "correctAnswer": "Haley",
    "question": "In the indie farming game \"Stardew Valley\", which NPC hates the \"prismatic shard\" item when received as a gift?",
    "questionNumber": 9,
    "questionImage": null,
    "questionType": type.textQuestion
  }
]

const trafficQuestions1 = [
  {
    "answers": [
      "دو طرفہ ٹریفک یک طرفہ روڈ کو کراس کر رہی ہے",
      "دو طرفہ ٹریفک سیدھی آگے جارہی ہے",
      "دو طرفہ ٹریفک",
    ],
    "correctAnswer": "دو طرفہ ٹریفک",
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon30,
    "questionNumber": 0,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      "اوور ٹیکنگ منع ہے",
      "اوور ٹیکنگ کر سکتے ہیں",
      "معلوم نہیں",
    ],
    "correctAnswer": "اوور ٹیکنگ منع ہے",
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon98,
    "questionNumber": 1,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      "سٹاپ لائن",
      "راستہ دینے کا نشان",
      "بکس چوک",
    ],
    "correctAnswer": "بکس چوک",
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon97,
    "questionNumber": 2,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      "تمام عائد کردہ پابندیاں ختم ہیں",
      "گول چکر",
      "سڑک بند ہے",
    ],
    "correctAnswer": "تمام عائد کردہ پابندیاں ختم ہیں",
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon39,
    "questionNumber": 3,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      "بغیر گیٹ ریلوے پھاٹک",
      "گیٹ",
      "گیٹ والا ریلوے پھاٹک ",
    ],
    "correctAnswer": "گیٹ والا ریلوے پھاٹک ",
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon99,
    "questionNumber": 4,
    "questionType": type.questionWithImage
  },

  {
    "answers": [
      images.icon37,
      images.icon39,
      images.icon52,
      images.icon51,
    ],
    "correctAnswer": images.icon52,
    "question": "ذیل میں سے اوور ٹیکنگ منع ہے کا اشارہ کون سا ہے؟",
    "questionNumber": 5,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  // TODO: image confirm 6
  {
    "answers": [
      images.icon15,
      images.icon16,
      images.icon19,
      images.icon100,
    ],
    "correctAnswer": images.icon100,
    "question": "ذیل میں سے سڑک کے کنارے نرم ہیں کا اشارہ کون سا ہے؟",
    "questionNumber": 6,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon62,
      images.icon71,
      images.icon102,
      images.icon101,
    ],
    "correctAnswer": images.icon101,
    "question": "ذیل میں سے یک طرفہ سڑک کا اشارہ کون سا ہے؟",
    "questionNumber": 7,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon105,
      images.icon103,
      images.icon104,
    ],
    "correctAnswer": images.icon105,
    "question": "ذیل میں سے ٹریفک لین سسٹم کی معلومات کا اشارہ کون سا ہے؟",
    "questionNumber": 7,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      "اوور ٹیکنگ کے لیے",
      "رکنے کے لیے",
      "اپنی موجودگی کا احساس دلانے کے لیے",
    ],
    "correctAnswer": "اپنی موجودگی کا احساس دلانے کے لیے",
    "question": "ہیڈلائٹس کو تیز اور مدھم کرنے کا کیا مطلب ہے؟",
    "questionNumber": 8,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "گاڑی روک دیں",
      "سپیڈ بڑھائیں",
      "احتیاط سے گزریں",
    ],
    "correctAnswer": "احتیاط سے گزریں",
    "question": "ٹریفک سگنل پر مسلسل جلتی بجھتی زرد لائٹ کا کیا مطلب ہے؟",
    "questionNumber": 9,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "گاڑی کی رفتار کم کر کے",
      "گاڑی ایک سائیڈ پر کھڑی کر کے",
      "سپیکر آن کر کے",
    ],
    "correctAnswer": "گاڑی ایک سائیڈ پر کھڑی کر کے",
    "question": "دوران ڈرائیونگ ہم موبائل فون کیسے استعمال کر سکتے ہیں؟",
    "questionNumber": 10,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "ہارن بجائیں",
      "چھوٹے گیر کا استعمال کریں",
      "پچھلے شیشوں کا استعمال کریں",
    ],
    "correctAnswer": "پچھلے شیشوں کا استعمال کریں",
    "question": "گاڑی کو روکنے سے پہلے آپ کو کیا کرنا چاہیے؟",
    "questionNumber": 11,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "مسافر کر",
      "مسافر اور ڈرائیور دونوں کی",
      "ڈرائیور کی",
    ],
    "correctAnswer": "Greenheart Games",
    "question": "گاڑی کی سیٹ بیلٹ باندھنا کس کی ذمہ داری ہے؟",
    "questionNumber": 12,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "انجن کو دوبارہ سٹارٹ کرنے کے لیے",
      "اگلی گاڑی سے مناسب فاصلہ رکھنے کے لیے",
      "موسم خراب ہونے کی صورت میں",
    ],
    "correctAnswer": "اگلی گاڑی سے مناسب فاصلہ رکھنے کے لیے",
    "question": "دو سیکنڈ کا قانون کب لاگو ہوتا ہے؟",
    "questionNumber": 13,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "ہاں",
    "question": "کیا اترائی کے وقت ڈرائیور کو گئیرتبدیل کر کے رفتار کنٹرول کرنی چاہیے؟",
    "questionNumber": 14,
    "questionImage": null,
    "questionType": type.textQuestion
  },

  {
    "answers": [
      "گاڑی پارک کر سکتے ہیں",
      "گاڑی روک نہیں سکتے ",
      "بڑی گاڑی کو راستہ دیں",
    ],
    "correctAnswer": "گاڑی روک نہیں سکتے",
    "question": "دوہری پیلی لکیر کا کیا مطلب ہے؟",
    "questionNumber": 15,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      'تکون',
      'اجازت نہ ہے',
      'راستہ دیں',
    ],
    "correctAnswer": 'راستہ دیں',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionNumber": 16,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      'ہاتھ ریڑھی کا داخلہ ممنوع ہے',
      'داخلہ ممنوع ہے',
      'جانوروں سے کھینچی جانے والی گاڑیوں کا داخلہ ممنوع ہے',
    ],
    "correctAnswer": 'جانوروں سے کھینچی جانے والی گاڑیوں کا داخلہ ممنوع ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon64,
    "questionNumber": 17,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'ہارن بجانا منع ہے',
      'ہارن کا استعمال کریں',
      'ہارن بجائیں',
    ],
    "correctAnswer": 'ہارن بجانا منع ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon50,
    "questionNumber": 18,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'پیدل چلنے کا راستہ',
      'سڑک پر گڑھا ہے',
      'ہارن سڑک پر کام ہو رہا ہے',
    ],
    "correctAnswer": 'سڑک پر کام ہو رہا ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon75,
    "questionNumber": 19,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      images.icon18,
      images.icon20,
      images.icon19,
      images.icon29,
    ],
    "correctAnswer": images.icon20,
    "question": "ذیل میں سے پھسلنے والی سڑک ہے کا اشارہ کون سا ہے؟",
    "questionNumber": 20,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon106,
      images.icon61,
      images.icon107,
      images.icon99,
    ],
    "correctAnswer": images.icon20,
    "question": "ذیل میں سے پھسلنے والی سڑک ہے کا اشارہ کون سا ہے؟",
    "questionNumber": 21,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon36,
      images.icon65,
      images.icon59,
      images.icon64,
    ],
    "correctAnswer": images.icon36,
    "question": "ذیل میں سے سائیکل سوار کا راستہ ہے کا اشارہ کون سا ہے؟",
    "questionNumber": 22,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      'اگر سامنے سے گاڑی نہ آرہی ہو تو اوورٹیک کر سکتے ہیں',
      'اوور ٹیکنگ منع ہے',
      'سٹاپ لائن',
    ],
    "correctAnswer": 'اگر سامنے سے گاڑی نہ آرہی ہو تو اوورٹیک کر سکتے ہیں',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon108,
    "questionNumber": 23,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'دیگر خطرات',
      'احتیاط کریں',
      'سڑک بند ہے',
    ],
    "correctAnswer": 'دیگر خطرات',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon107,
    "questionNumber": 24,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'بچوں کے گزرنے کی جگہ',
      'احتیاط کرپیدل اشخاص کے گزرنے کی جگہیں',
      'بس سٹاپ',
    ],
    "correctAnswer": 'احتیاط کرپیدل اشخاص کے گزرنے کی جگہیں',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon23,
    "questionNumber": 25,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'رکیے',
      'آہستہ چلیں',
      'آگے سٹاپ ہے',
    ],
    "correctAnswer": 'آہستہ چلیں',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon109,
    "questionNumber": 26,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'یوٹرن کر سکتے ہیں',
      'دائیں مڑ سکتے ہیں',
      'یو ٹرن منع ہے',
    ],
    "correctAnswer": 'یو ٹرن منع ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon53,
    "questionNumber": 27,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'بائیں طرف خطرناک موڑ',
      'یک طرفہ ٹریفک',
      'سڑک بند ہے',
    ],
    "correctAnswer": 'بائیں طرف خطرناک موڑ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon110,
    "questionNumber": 28,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'دائیں چلییں',
      'یک طرفہ سڑک',
      'بائیں مڑ جائیں',
    ],
    "correctAnswer": 'یک طرفہ سڑک',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon101,
    "questionNumber": 29,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'ہاتھ کا نشان',
      'رکنے کا نشان',
      'پانچ انگلیاں',
    ],
    "correctAnswer": 'رکنے کا نشان',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon112,
    "questionNumber": 30,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      images.icon55,
      images.icon53,
      images.icon54,
      images.icon113,
    ],
    "correctAnswer": 'رکنے کا نشان',
    "question": "ذیل میں سے آگے یو ٹرن ہے کا اشارہ کون سا ہے؟'",
    "questionImage": images.icon113,
    "questionNumber": 31,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon99,
      images.icon106,
      images.icon107,
      images.icon114,
    ],
    "correctAnswer": images.icon99,
    "question": 'ذیل میں سے ریلوے پھاٹک کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 32,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      images.icon19,
      images.icon109,
      images.icon68,
      images.icon17,
    ],
    "correctAnswer": images.icon68,
    "question": "ذیل میں سے پولیس چوکی سے رکے بغیر گزرنا ممنو ع ہے کا اشارہ کون سا ہے؟",
    "questionImage": null,
    "questionNumber": 33,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon8,
      images.icon7,
      images.icon10,
      images.icon6,
    ],
    "correctAnswer": images.icon7,
    "question": "ذیل میں سے سڑک دائیں جانب نکلتی ہے کا اشارہ کون سا ہے؟",
    "questionImage": null,
    "questionNumber": 34,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon19,
      images.icon20,
      images.icon18,
      images.icon29,
    ],
    "correctAnswer": images.icon18,
    "question": "ذیل میں سے ناہموار سڑک کا اشارہ کون سا ہے؟",
    "questionImage": null,
    "questionNumber": 35,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon36,
      images.icon65,
      images.icon59,
      images.icon64,
    ],
    "correctAnswer": images.icon59,
    "question": 'ذیل میں سے موٹر سا ئیکلوں کا داخلہ ممنوع ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 36,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon16,
      images.icon15,
      images.icon29,
      images.icon20,
    ],
    "correctAnswer": images.icon29,
    "question": 'ذیل میں سے گاڑی سے اڑ کر پتھر لگنے کا حدشہ ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 37,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      'دائیں طرف سے آنے والی گاڑیوں کا',
      'بائیں طرف سے آنے والی گاڑیوں کا',
      'کسی کا نہیں',
    ],
    "correctAnswer": 'دائیں طرف سے آنے والی گاڑیوں کا',
    "question": 'گول چکر پر پہلے گزرنے کا حق کن گاڑیوں کا حاصل ہے؟',
    "questionImage": null,
    "questionNumber": 38,
    "questionType": type.textQuestion
  },

  {
    "answers": [
      'دو گنا مناسب فاصلہ سے',
      'تین گنا مناسب فاصلہ سے',
      'چار گنا مناسب فاصلہ سے',
    ],
    "correctAnswer": 'دو گنا مناسب فاصلہ سے',
    "question": 'بارش اور آندھی کی صورت میں اگلی گاڑی سے کتنا فاصلہ ہونا چاہیے؟',
    "questionImage": null,
    "questionNumber": 39,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'ریڈیو کی آواز اونچی کر دیں',
      'ہیٹر آن کر دیں',
      'رکیں آرام کریں یا ممکن ہو تو ڈرائیور کر تبدیل کر دیں',
    ],
    "correctAnswer": 'رکیں آرام کریں یا ممکن ہو تو ڈرائیور کر تبدیل کر دیں',
    "question": 'اگر دوران ڈرائیونگ آپ کو غنودگی کو تو آپ کو کیا کرنا چاہیے؟',
    "questionImage": null,
    "questionNumber": 40,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'درست',
      'غلط',
      'معلوم نہیں',
    ],
    "correctAnswer": 'غلط',
    "question": 'اگر پیچھے سے آنے والا ڈرائیور بے جا ہارن دے تو اسے راستہ نہیں دینا چاہیے؟',
    "questionImage": null,
    "questionNumber": 41,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'درست',
      'غلط',
      'معلوم نہیں',
    ],
    "correctAnswer": 'غلط',
    "question": 'کیا گاڑی کی بریک لگاتے وقت کلچ دبانا چاہیے؟',
    "questionImage": null,
    "questionNumber": 42,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'نو میٹر سے زائد چوڑی گاڑیوں کا داخلہ ممنوع ہے',
      'نو میٹر سےزائد لمبی گاڑیوں کا داخلہ ممنوع ہے',
      'بڑی گاڑیوں کا داخلہ ممنوع ہے',
    ],
    "correctAnswer": 'نو میٹر سےزائد لمبی گاڑیوں کا داخلہ ممنوع ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon115,
    "questionNumber": 43,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'ٹیلی فون',
      'طبی امداد',
      'ریسٹورنٹ',
    ],
    "correctAnswer": 'ٹیلی فون',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon86,
    "questionNumber": 44,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'بس سٹاپ',
      'ہسپتال',
      'ریسٹورنٹ',
    ],
    "correctAnswer": 'ٹیلی فون',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon84,
    "questionNumber": 45,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'بس سٹاپ',
      'ہسپتال',
      'ریسٹورنٹ',
    ],
    "correctAnswer": 'بس سٹاپ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon84,
    "questionNumber": 46,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'ائیر پورٹ',
      'پتنگ',
      'ہوائی اڈہ بند ہے',
    ],
    "correctAnswer": 'ائیر پورٹ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon33,
    "questionNumber": 47,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'خطرنا ک اترائی',
      'سڑک پر پھسلن ہے',
      'تیز چڑھائی',
    ],
    "correctAnswer": 'خطرنا ک اترائی',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon15,
    "questionNumber": 48,
    "questionType": type.questionWithImage

  },

  {
    "answers": [
      'آگے سڑک بند ہے',
      'سٹاپ',
      'یک طرفہ سڑک',
    ],
    "correctAnswer": 'آگے سڑک بند ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon61,
    "questionNumber": 49,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'آگے دوہری سڑک ختم ہے',
      'آگے دوہری سڑک ہے',
      'سڑک بند ہے',
    ],
    "correctAnswer": 'آگے دوہری سڑک ختم ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon44,
    "questionNumber": 50,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      ' ساڑھے سولہ فٹ سے ذیادہ چوڑی گاڑیوں کا داخلہ ممنوع ہے',
      ' ساڑھے سولہ فٹ سےذیادہ اونچی گاڑیوں کا داخلہ ممنوع ہے',
      ' ساڑھے سولہ فٹ سےذیادہ لمبی گاڑیوں کا داخلہ ممنوع ہے',
    ],
    "correctAnswer": 'ساڑھے سولہ فٹ سےذیادہ اونچی گاڑیوں کا داخلہ ممنوع ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon48,
    "questionNumber": 51,
    "questionType": type.questionWithImage

  },
  // {
  //   "answers": [
  //     images.icon16,
  //     images.icon15,
  //     images.icon29,
  //     images.icon20,
  //   ],
  //   "correctAnswer": images.icon15,
  //   "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
  //   "questionImage": images.icon48,
  //   "questionNumber": 52,
  //   "questionType": type.questionWithImage

  // },
  {
    "answers": [
      images.icon79,
      images.icon73,
      images.icon71,
      images.icon30,
    ],
    "correctAnswer": images.icon30,
    "question": 'ذیل میں سے دو طرفہ ٹریفک کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 53,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon110,
      images.icon61,
      images.icon39,
      images.icon107,
    ],
    "correctAnswer": images.icon30,
    "question": 'ذیل میں سےسڑک بند ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 54,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon11,
      images.icon12,
      images.icon8,
      images.icon5,
    ],
    "correctAnswer": images.icon11,
    "question": 'چھوٹی سڑک بائیں جانب ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 55,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      'آگے دوہری سڑک ختم ہے',
      'آگے دوہری سڑک ہے',
      'سڑک بند ہے',
    ],
    "correctAnswer": 'آگے دوہری سڑک ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon45,
    "questionNumber": 56,
    "questionType": type.questionWithImage
  },

  {
    "answers": [
      'خطرنا ک اترائی',
      'سڑک پر پھسلن ہے',
      'تیز چڑھائی',
    ],
    "correctAnswer": 'تیز چڑھائی',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon15,
    "questionNumber": 57,
    "questionType": type.questionWithImage

  },

  {
    "answers": [
      images.icon11,
      images.icon12,
      images.icon13,
      images.icon14,
    ],
    "correctAnswer": images.icon14,
    "question": 'آگے چھوٹی سڑک بڑی سڑک کو کراس کرتی ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 58,
    "questionType": type.questionWithImage

  },

  // {
  //   "answers": [
  //     images.icon11,
  //     images.icon12,
  //     images.icon13,
  //     images.icon14,
  //   ],
  //   "correctAnswer": images.icon14,
  //   "question":'ذیل میں سے اوور ٹیکنگ کر سکتے ہیں اگر مخالف سمت سے گاڑی نہ آرہی ہو کا نشان کون سا ہے؟',
  //   "questionImage": null,
  //   "questionNumber": 58
  // },


  {
    "answers": [
      images.icon8,
      images.icon11,
      images.icon6,
      images.icon10,
    ],
    "correctAnswer": images.icon8,
    "question": 'ذیل میں سے بائیں جانب چھوٹی سڑک نکلتی ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 59,
    "questionType": type.choiceWithImage
  },

  {
    "answers": [
      images.icon87,
      images.icon88,
      images.icon86,
      images.icon96,
    ],
    "correctAnswer": images.icon88,
    "question": 'ذیل میں سے ابتدائی طبی امداد کا اشارہ کون سا ہے',
    "questionImage": null,
    "questionNumber": 60,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      images.icon87,
      images.icon88,
      images.icon86,
      images.icon96,
    ],
    "correctAnswer": images.icon88,
    "question": 'ذیل میں سے رکنے کے لیے آہستہ ہو جائیں کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 61,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "ہاں",
    "question": 'کیا کمرشل گاڑی میں آگ بجھانے کا آلہ رکھنا ضروری ہے؟',
    "questionNumber": 62,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "نہیں",
    "question": 'کیا گاڑی گرم ہونے کی صورت میں ریڈی ایٹر کا ڈھکن فوری کھول دینا چاہیے؟',
    "questionNumber": 63,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      "پنتالیس میٹر",
      "ساٹھ میٹر",
      "نوے میٹر",
    ],
    "correctAnswer": "ساٹھ میٹر",
    "question": 'اگر آپ کی گاڑی کی رفتار 90 کلومیٹر ہو تو اگلی گاڑی سے کتنا فاصلہ ہونا چاہیے؟',
    "questionNumber": 64,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "ہاں",
    "question": 'تین لینوں والی سڑک پر دائیں لین صرف اوورٹیکنگ اور دائیں مڑنے کے لیے ہوتی ہے؟',
    "questionNumber": 65,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      images.icon116,
      images.icon117,
      images.icon118,
      images.icon115,
    ],
    "correctAnswer": images.icon115,
    "question": 'ذیل میں سے نو میٹر سےزائد لمبی گاڑیوں کا داخلہ ممنوع ہے کا اشارہ کون سا ہے؟',
    "questionNumber": 66,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },

  {
    "answers": [
      'ساڑھے سولہ فٹ سےذیادہ لمبی گاڑیوں کا داخلہ ممنوع ہے',
      'حد رفتار پر عائد پابندی ختم ',
      'حد رفتار 5 کلو میٹر',
    ],
    "correctAnswer": 'حد رفتار پر عائد پابندی ختم ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon38,
    "questionNumber": 67,
    "questionType": type.questionWithImage
  },

  {
    "answers": [
      'غیر ہموار سڑک',
      'سڑک پر نشیب ہے',
      'سڑک پرپھسلن ہے',
    ],
    "correctAnswer": 'سڑک پر نشیب ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon119,
    "questionNumber": 68,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      'غیر ہموار سڑک',
      'سڑک پر نشیب ہے',
      'سڑک پرپھسلن ہے',
    ],
    "correctAnswer": 'سڑک پر نشیب ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon119,
    "questionNumber": 69,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      'اوور ٹیکنگ منع ہے',
      'دو طرفہ ٹریفک',
      'اوور ٹیکنگ پر عائد پابندی ختم ہے',
    ],
    "correctAnswer": 'اوور ٹیکنگ پر عائد پابندی ختم ہے',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon37,
    "questionNumber": 70,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      'پارکنگ منع ہے ',
      'بائیں طرف پارکنگ کریں',
      'پارکنگ',
    ],
    "correctAnswer": 'بائیں طرف پارکنگ کریں',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon82,
    "questionNumber": 71,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      'رکنے کی لکیر',
      'راستہ دینے کی لکیر ',
      'کراسنگ',
    ],
    "correctAnswer": 'راستہ دینے کی لکیر ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon120,
    "questionNumber": 72,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'جانوروں کے گزرنے کی جگہ',
      'جنگلی جانوروں کے گزرنے کی جگہ ',
      'مویشیوں کے گزرنے کی جگہ ',
    ],
    "correctAnswer": 'مویشیوں کے گزرنے کی جگہ ',
    "question": "سامنے دیئےگئےنشان سے کیا مراد ہے؟",
    "questionImage": images.icon24,
    "questionNumber": 73,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      images.icon96,
      images.icon92,
      images.icon86,
      images.icon87,
    ],
    "correctAnswer": images.icon96,
    "question": 'ذیل میں سے پٹرول پمپ کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 74,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      images.icon38,
      images.icon37,
      images.icon39,
      images.icon40,
    ],
    "correctAnswer": images.icon37,
    "question": 'ذیل میں سے اوور ٹیکنگ پر عائد پابندی ختم ہے کا اشارہ کون سا ہےْ',
    "questionImage": null,
    "questionNumber": 75,
    "questionType": type.choiceWithImage
  },

  {
    "answers": [
      images.icon12,
      images.icon5,
      images.icon6,
      images.icon13,
    ],
    "correctAnswer": images.icon12,
    "question": 'ذیل میں سے چھوٹی سڑک دائیں جانب ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 76,
    "questionType": type.choiceWithImage
  },

  {
    "answers": [
      images.icon120,
      images.icon41,
      images.icon121,
      images.icon13,
    ],
    "correctAnswer": images.icon41,
    "question": 'ذیل میں سے لازمی گول چکر کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 77,
    "questionType": type.choiceWithImage
  },


  {
    "answers": [
      images.icon122,
      images.icon123,
      images.icon121,
      images.icon124,
    ],
    "correctAnswer": images.icon123,
    "question": 'ذیل میں سے پارکنگ منع ہے کا اشارہ یا لکیر کون سی ہے؟',
    "questionImage": null,
    "questionNumber": 78,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      images.icon125,
      images.icon126,
      images.icon127,
      images.icon118,
    ],
    "correctAnswer": images.icon126,
    "question": 'ذیل میں سے ساڑھے آٹھ فٹ سے زائد چوڑی گاڑیوں کا داخلہ ممنوع ہے کا اشارہ کون سا ہے؟',
    "questionImage": null,
    "questionNumber": 79,
    "questionType": type.choiceWithImage

  },

  {
    "answers": [
      'جانوروں کے لیے',
      'زپبرا کے لیے',
      'پیدل چلنے والوں کے لیے',
    ],
    "correctAnswer": 'پیدل چلنے والوں کے لیے',
    "question": 'زیبرا کراسنگ کن کے لیے مخصوص ہے؟',
    "questionImage": null,
    "questionNumber": 80,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      'بس لین میں پارکنگ کی اجازت نہیں ہوتی',
    ],
    "correctAnswer": 'بس لین میں پارکنگ کی اجازت نہیں ہوتی',
    "question": 'بس لین میں گاڑی کھڑی کر کے ہینڈ بریک ضرور لگانی چاہیے؟',
    "questionImage": null,
    "questionNumber": 81,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'ایک ایکسل پر سات ٹن سے ذائد گاڑیوں کا داخلہ ممنو ع ہے ',
      'پل کی اونچائی سات فٹ',
      'مال بردار گاڑیوں کا داخلہ منع ہے',
    ],
    "correctAnswer": 'ایک ایکسل پر سات ٹن سے ذائد گاڑیوں کا داخلہ ممنو ع ہے ',
    "question": 'سامنے دیئےگئےنشان سے کیا مراد ہے؟',
    "questionImage": images.icon49,
    "questionNumber": 82,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'بائیں مڑ جائیں ',
      'راستہ دینے لی لکیر',
      'سٹاپ لائن',
    ],
    "correctAnswer": 'سٹاپ لائن',
    "question": 'سامنے دیئےگئےنشان سے کیا مراد ہے؟',
    "questionImage": images.icon129,
    "questionNumber": 83,
    "questionType": type.questionWithImage
  },
  {
    "answers": [
      'ائیرپورٹ',
      'تِیزآندھی کا علاقہ',
      'سٹاپ لائن',
    ],
    "correctAnswer": 'تِیزآندھی کا علاقہ',
    "question": 'سامنے دیئےگئےنشان سے کیا مراد ہے؟',
    "questionImage": images.icon128,
    "questionNumber": 84,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'سیدھا جائیں ',
      'آگے سڑک تنگ ہے ',
      'دوہڑی سڑک ختم',
    ],
    "correctAnswer": 'آگے سڑک تنگ ہے ',
    "question": 'سامنے دیئےگئےنشان سے کیا مراد ہے؟',
    "questionImage": images.icon17,
    "questionNumber": 85,
    "questionType": type.questionWithImage

  },
  {
    "answers": [
      'ہارن بجانا منع ہے ',
      'تِیزآندھی کا علاقہ',
      'بائیں نہیں مڑ سکتے ',
    ],
    "correctAnswer": 'بائیں نہیں مڑ سکتے ',
    "question": 'سامنے دیئےگئےنشان سے کیا مراد ہے؟',
    "questionImage": images.icon54,
    "questionNumber": 86,
    "questionType": type.questionWithImage

  },

  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "نہیں",
    "question": 'کیا احتیاطی اشاروں پر عمل کرنا قانونا لازم نہیں؟',
    "questionNumber": 87,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      images.icon120,
      images.icon128,
      images.icon97,
      images.icon129,
    ],
    "correctAnswer": images.icon120,
    "question": 'ذیل میں سے راستہ دینے کی لکیر کون سی ہے؟',
    "questionNumber": 88,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon62,
      images.icon54,
      images.icon55,
      images.icon27,
    ],
    "correctAnswer": images.icon27,
    "question": 'ذیل میں سے دائیں مڑ جائیں کا اشارہ کون سا ہے؟',
    "questionNumber": 89,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon131,
      images.icon132,
      images.icon133,
      images.icon98,
    ],
    "correctAnswer": images.icon133,
    "question": 'ذیل میں سے بار بردار یا لوڈنگ گاڑیوں کا داخلہ ممنوع ہے کا اشارہ کون سا ہے؟',
    "questionNumber": 90,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon37,
      images.icon34,
      images.icon30,
      images.icon136,
    ],
    "correctAnswer": images.icon136,
    "question": 'ذیل میں سے تنگ پل کا اشارہ کون سا ہے؟',
    "questionNumber": 91,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon76,
      images.icon74,
      images.icon77,
      images.icon136,
    ],
    "correctAnswer": images.icon74,
    "question": 'ذیل میں سے چٹانوں کے گرنے کا حدشہ ہے کا اشارہ کون سا ہے؟',
    "questionNumber": 92,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      '20 MINUTES',
      '30 MINUTES',
      '40 MINUTES',
    ],
    "correctAnswer": '30 MINUTES',
    "question": 'سورج غروب ہونے کے کتنی دیر بعد گاڑی کی لائٹ جلانی چاہیے؟',
    "questionNumber": 93,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "ہاں",
    "question": 'کیا ڈرائیور کا اپنی گاڑی میں ہائے وے کوڈ بک رکھنا ضروری ہے؟',
    "questionNumber": 94,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'فرنٹ سکرین',
      'ڈیش بورڈ',
      'ہیڈ لائٹس',
    ],
    "correctAnswer": 'فرنٹ سکرین',
    "question": 'گاڑی کی کون سی چیزہمہشہ صاف رکھنی چاہیے',
    "questionNumber": 95,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'دائیں',
      'بائیں',
      'اوور ٹیک نہیں کر سکتے',
    ],
    "correctAnswer": 'اوور ٹیک نہیں کر سکتے',
    "question": 'گول چکر میں اوور ٹیک کرتے ہوئے کون سا انڈیکیٹر استعمال کرنا چاہیے؟',
    "questionNumber": 96,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      '100کلومیٹر فی گھنٹہ',
      '110کلومیٹر فی گھنٹہ',
      '120کلومیٹر فی گھنٹہ',

    ],
    "correctAnswer": '100کلومیٹر فی گھنٹہ',
    "question": 'موٹر وے پر ایچ ٹی وی  گاڑیوں کی حد رفتار کیا ہوتی ہے؟',
    "questionNumber": 97,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      "نہیں",
      "ہاں",
      "معلوم نہیں",
    ],
    "correctAnswer": "ہاں",
    "question": 'دائیں مڑنا ہو تو موڑ سے تقریبا 200 میٹرپہلے انتہائی دائیں لین میں آجائیں؟',
    "questionNumber": 98,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      images.icon5,
      images.icon6,
      images.icon7,
      images.icon8,
    ],
    "correctAnswer": images.icon6,
    "question": 'پہلے بائیں اور پھر دائیں طرف سے چھوٹی سڑکیں اس سڑک سے ملتی ہیں کا اشارہ کون سا ہے؟',
    "questionNumber": 99,
    "questionImage": null,
    "questionType": type.choiceWithImage
  },
  {
    "answers": [
      images.icon5,
      images.icon6,
      images.icon7,
      images.icon8,
    ],
    "correctAnswer": images.icon5,
    "question": 'پہلے دائیں اور پھر بائیں طرف سے چھوٹی سڑکیں اس سڑک سے ملتی ہیں کا اشارہ کون سا ہے؟',
    "questionNumber": 100,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      images.icon25,
      images.icon27,
      images.icon34,
      images.icon35,
    ],
    "correctAnswer": images.icon25,
    "question": 'ذیل میں سے آگے بایاں موڑ ہے کا اشارہ کون سا ہے؟',
    "questionNumber": 101,
    "questionImage": null,
    "questionType": type.choiceWithImage

  },
  {
    "answers": [
      'گاڑی کی رفتار کم کر کے',
      'گاڑی ایک سائیڈ پر کھڑی کر کے',
      'سپیکر آن کر کے',
    ],
    "correctAnswer": 'گاڑی ایک سائیڈ پر کھڑی کر کے',
    "question": 'دوران ڈرائیونگ ہم  موبائل فون کیسے استعمال کر سکتے ہیں؟',
    "questionNumber": 102,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      'ہارن بجائیں',
      'چھوٹے گیر کا استعمال کریں',
      'پچھلے شیشوں کا استعمال کریں',
    ],
    "correctAnswer": 'پچھلے شیشوں کا استعمال کریں',
    "question": 'گاڑی کو روکنے سے پہلے آپ کو کیا کرنا چاہیے؟',
    "questionNumber": 104,
    "questionImage": null,
    "questionType": type.textQuestion

  },
  {
    "answers": [
      'گاڑی پارک کر سکتے ہیں',
      'گاڑی روک نہیں سکتے',
      'بڑی گاڑی کو راستہ دیں',
    ],
    "correctAnswer": 'گاڑی روک نہیں سکتے',
    "question": 'دوہری پیلی لکیر کا کیا مطلب ہے؟',
    "questionNumber": 105,
    "questionImage": null,
    "questionType": type.textQuestion
  },
  {
    "answers": [
      'دائیں طرف دہرا موڑ',
      'آگے سڑک خراب ہے',
      'سڑک پر پھسلن ہے',
    ],
    "correctAnswer": 'دائیں طرف دہرا موڑ',
    "question": 'ذیل میں سے تنگ پل کا اشارہ کون سا ہے؟',
    "questionNumber": 106,
    "questionImage": null,
    "questionType": type.textQuestion

  },

]

