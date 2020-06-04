// Dependencies
import { Chat } from '../models'

export function strings(chat: Chat, key: string) {
  return (
    localizations[key][chat.language] ||
    localizations[key]['en'] ||
    `🤔 Localization not found, please, contact @borodutch.

Локализация не найдена, пожалуйста, напишите @borodutch.`
  )
}

export const localizations = {
  help: {
    en: `This bot is forked from Shieldy with some customizations. — Shieldy is the best solution in Telegram to fight annoying spammers. It asks newcomers to execute a set action within a set period, otherwise it kicks them. It's this easy. Make sure @shieldy\\_bot is an admin at your chat and it's all done! You can also further setup the behaviour with the following commands:

/help — shows this message
/language — switches language
/captcha — changes type of captcha used
/timeLimit — changes amount of time given to newcomers
/lock — makes commands accessible only by admins
/restrict — restricts newcomers to send only text messages in the first 24 hours
/deleteEntryMessages — delete messages about user entry
/greeting — greets users who pass the test
/trust — reply with this command to a message sent by user that you don't want to check
/ban — same as trust, but the opposite
/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Still got questions? Check out the support channel — @borodutch\\_support. Shieldy code is open source and can be found [here](https://github.com/backmeupplz/shieldy). Thank you!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ru: `Shieldy — это лучшее решение в Телеграме по борьбе с надоедливыми спамерами. Он просит всех новичков сделать определенное действие в течение заданного времени и банит их, в случае несогласия. Да, это настолько просто. Убедитесь, что @shieldy\\_bot — админ в вашей группе, и все уже готово! Вы можете продолжить настройку бота, воспользовавшись следующими командами:

/help — показывает это сообщение
/language — меняет язык
/captcha — меняет тип капчи
/timeLimit — меняет количество времени, данное новичками
/lock — делает команды доступными только админами
/restrict — запрещает новичкам посылать что-либо, кроме текстовых сообщений в первые 24 часа
/deleteEntryMessages — удалять сообщения о входе пользователей в чат
/greeting — встречать прошедших проверку пользователей сообщением
/trust — ответьте этой командой на сообщение пользователя, которого не нужно проверять
/ban — то же, что и trust, но наоборот
/strict — используйте, если не хотите получать никакие сообщения от новичков кроме решения капчи, до прохождения капчи
/customCaptchaMessage — установить свое сообщение с капчей
/deleteGreetingTime — установить время в секундах, когда Щилди должен удалить приветствие вида \`/deleteGreetingTime 100\`
отключите эту фцнкцию, установив значение 0
/banUsers — банить или кикать пользователей
/deleteEntryOnKick — удалять ли сообщения о входе для пользователей, которые провалили капчу
/cas — использовать Combot Anti-Spam или нет
/underAttack — включить или выключить режим автоматического кика всех новичков
/noAttack — отключить Щилди
/noChannelLinks — автоматически удалять сообщения со ссылками на Телеграм-каналы
/viewConfig — посмотреть текущие настройки Щилди
/buttonText — изменить текст кнопки капчи в формате \`/buttonText Я не бот!\`
/allowInvitingBots — могут ли пользователи приглашать в чат других ботов
/greetingButtons — настроить кнопки для приветственного сообщения

Остались вопросы? Почитайте канал поддержки — @borodutch\\_support. Код Shieldy в открытом доступе [вот тут](https://github.com/backmeupplz/shieldy). Спасибо!

Попробуйте еще один мой проект — [Тудурант](https://todorant.com) ([iOS](https://apps.apple.com/ru/app/todorant/id1482078243), [Андроид](https://play.google.com/store/apps/details?id=com.todorant)). Это умный список задач, который использует поведенческую психологию для того, чтобы заставить ваш мозг выполнять задачи. Полностью бесплатен 30 дней без каких-либо обязательств, поэтому почему бы не попробовать улучшить свою продуктивность? Тудурант помог мне, поможет и вам!`,
    it: `Shieldy — è la soluzione migliore per combattere gli spammer su Telegram. Chiede ai nuovi utenti di compiere un'azione entro un lasso di tempo prestabilito, altrimenti verranno kickati. E' semplice. Assicurati che @shieldy\\_bot sia un amministratore del gruppo ed è tutto pronto! Puoi anche impostare le azioni con i seguenti comandi:

/help — Mostra questo messaggio
/language — Modifica la lingua
/captcha — Modifica il tipo di captcha
/timeLimit — Modifica il tempo a disposizione per i nuovi membri
/lock — Rendi accessibili i comandi solo agli amministratori
/restrict — limita i nuovi membri ad inviare solo messaggi per le prime 24 ore
/deleteEntryMessages — cancella i messaggi d'ingresso dei nuovi membri
/greeting — dai il benvenuto ad un utente se passa il captcha
/trust — rispondi con questo messaggio ad un utente che non vuoi che controlli
/ban — same as trust, but the opposite
/strict — usa questo comando quando non vuoi che i nuovi utenti inviino messaggi prima che passino il captcha
/customCaptchaMessage — imposta un messaggio del captcha personalizzato
/deleteGreetingTime — imposta in quanto tempo in secondi il messaggio di benvenuto debba essere eliminato, ad esempio \`/deleteGreetingTime 100\`, resettalo impostandolo a 0
/banUsers — scegli se bannare o kickare
/deleteEntryOnKick — scegli se eliminare i messaggi d\'ingresso per coloro che hanno fallito il captcha
/cas — scegli se usare Combot Anti-Spam
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Hai ancora domande? Dai un'occhiata al canale — @borodutch\\_support. Shieldy è open source e il suo codice sorgente può essere trovato [qui](https://github.com/backmeupplz/shieldy). Grazie!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    et: `Shieldy — Telegrami parim lahendus ängistatavate rämpspostitajate vastu. Ta palub kõigil uustulnukitel teha mingi tegevus, teatud aja jooksul, kui nad ei ole seda teinud, siis see blokeerib neid. Jah, see on nii lihtne. Veenduge, et @shieldy\\_bot — administraator teie gruppis, ja kõik on valmis! Konfigureerige Shieldy kasutades järgmised käsud:

/help — näitab seda sõnumi
/language — muutub keelt
/captcha — muutub captcha tüüpi
/timeLimit — muutub uustilnukitele antud aega
/lock — muudab käsud kättesaadavaks ainult administraatoritele
/restrict — restricts newcomers to send only text messages in the first 24 hours
/deleteEntryMessages — delete messages about user entry
/greeting — greets users who pass the test
/trust — reply with this command to a message sent by user that you don't want to check
/ban — same as trust, but the opposite
/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Veel küsimusi? Kirjutage minu loojale — @borodutch\\_support. Shieldy lähtekood on avatud [siin](https://github.com/backmeupplz/shieldy). Aitäh!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    uk: `Shieldy — це найкраще рішення в Телеграмі для боротьби з надокучливими спамерами. Він просить усіх новачків зробити певну дію протягом вказаного часу і банить їх у разі незгоди. Так, це настільки просто! Переконайтеся, що @shieldy\\_bot — адміністратор у Вашій групі і усе вже готово! Ви можете продовжити налаштування бота, використавши наступні команди:

/help — показує це повідомлення
/language — змінює мову
/captcha — змінює тип капчі
/timeLimit — змінює кількість часу, що дається новачкам
/lock — робить команди доступними тільки адміністраторам
/restrict — забороняє новачкам надсилати будь-що, крім текстових повідомлень в перші 24 години
/deleteEntryMessages — видаляти повідомлення про вхід користувачів у чат
/greeting — вітає користувачів, які пройшли тест
/trust — надішліть у відповідь на повідомлення користувача, якого не треба перевіряти
/ban — те саме що й trust, але навпаки
/strict — використовуйте, якщо не хочете отримувати жодних повідомлень від новачків, поки вони не вирішать капчу
/customCaptchaMessage — встановити власне повідомлення капчі
/deleteGreetingTime — встановлює час, коли потрібно видаляти вітання від бота, наприклад \`/deleteGreetingTime 100\`, встановіть у 0 щоб скинути
/banUsers — банити користувачів чи одразу вилучати
/deleteEntryOnKick — чи видаляти повідомлення про вхід користувачів, що не вирішили капчу
/cas — використовувати Combot Anti-Spam чи ні
/underAttack — спеціальний режим коли всі новачки одразу вилучаються з чату
/noAttack — відключити Shieldy
/noChannelLinks — автоматично видаляти повідомлення з посиланнями на телеграм-канали
/viewConfig — подивитися поточні настройки
/buttonText — змінити текст кнопки капчи в форматі \`/buttonText Я не бот!\`
/allowInvitingBots — чи можуть користувачі додавати ботів
/greetingButtons — налаштування кнопок у повідомленні з привітанням

Залишились питання? Почитайте канал підтримки — @borodutch\\_support. Код Shieldy у відкритому доступі [ось тут](https://github.com/backmeupplz/shieldy). Дякуємо!

Запрошую переглянути інші мої проекти — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). Це розумний додаток для впорядкування списку справ, який за допомогою когнітивної психології спокушує ваш мозок закінчувати проекти та показувати результати. Безкоштовно протягом 30 днів без жодних зобовʼязань, дайте йому шанс, якщо ви хочете підвищити свою продуктивність. Це допомогло мені — може допомогти і вам.`,
    br: `Shieldy — é a melhor solução em combater spammers no telegram. Ele pede para um novato realizar uma ação em determinado tempo, caso contrário o usuário é kickado. Fácil assim. Tenha certeza que @shieldy\\_bot é um ADM no seu grupo e estará tudo bem! Você ainda pode mudar o comportamento do bot com os seguintes comandos:

/help — mostra essa mensagem
/language — muda a língua
/captcha — muda o tipo de captcha usado
/timeLimit — muda o tempo dado para o novato realizar a ação
/lock — faz dos comandos acessíveis apenas pelos ADMs
/restrict — restringe o novato para mandar somente mensagens de texto nas primeiras 24 horas
/deleteEntryMessages — deleta a mensagem de entrada do usuário
/greeting — congratula o usuário que passou no teste
/trust — reply with this command to a message sent by user that you don't want to check
/ban — same as trust, but the opposite
/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Ainda tem perguntas? De uma olhada no canal de suporte — @borodutch\\_support. O codigo do Shieldy é OpenSource e pode ser encontrado [aqui](https://github.com/backmeupplz/shieldy). Obrigado.

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    tr: `Shieldy — Cam sıkıcı SPAM göndericilere karşı savaşmak için Telegram'daki en iyi çözümdür. Yeni gelenlerden belirli bir süre içerisinde belirli bir eylemi gerçekleştirmesini ister, aksi takdirde onları kovar. Bu çok kolaydır. Bunun için, @shieldy\\_bot botunun sohbetinizde yönetici olduğundan emin olun. İşte hepsi bu kadar! Ayrıca aşağıdaki bu komutlarla davranışları daha da ayrıntılı bir şekilde ayarlayabilirsiniz:

/help — Bu iletiyi görüntüler
/language — Dili değiştirir
/captcha — Kullanılan CAPTCHA biçimini değiştirir
/timeLimit — Yeni gelenlere verilen zaman süresini değiştirir
/lock — Komutları yalnızca yöneticiler tarafından erişilebilir hale getirir
/restrict — Yeni gelenleri ilk 24 saat yalnızca metin mesajı göndermeleri için kısıtlar
/deleteEntryMessages — Kullanıcı girişi ile ilgili mesajları siler
/greeting — Testi geçen kullanıcıları selamlar
/trust — Bu komutla kullanıcı tarafından gönderilen kontrol etmek istemediğiniz bir mesajı yanıtlayın
/ban — same as trust, but the opposite
/strict — Yeni gelenlerin mesajlarını almak istemediğiniz zaman kullanın. Ancak CAPTCHA, testi geçene kadar çözüm sunar.
/customCaptchaMessage — Özel CAPTCHA mesajınızı ayarlayın
/deleteGreetingTime — Shieldy'nin selamlamasını \`/deleteGreetingTime 100\` gibi kaç saniye içinde sileceğini ayarlayın, 0 yaparak sıfırlayabilirsin.
/banUsers — Kullanıcıların yasaklanacağını mı yoksa kovulacağını mı ayarlayın
/deleteEntryOnKick — CAPTCHA'dan başarısız olan kullanıcıların girdiği mesajların silinip silinmeyeceğini ayarlayın
/cas — Combot Anti-Spam'ın kullanılıp kullanılmayacağını ayarlayın
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Hala sorularınız mı var? Destek kanalını kontrol edin: @borodutch\\_support. Shieldy'in kodu açık kaynaklıdır ve [buradan](https://github.com/backmeupplz/shieldy) erişilebilir. Teşekkür ederiz!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    es: `Shieldy — es la mejor solución en Telegram para luchar los molestos spammers. Pide a los recién llegados hacer una serie de acciones en un tiempo determinado, si no lo hacen los expulsa. Así de fácil. Asegúrate de que @shieldy\\_bot es administrador en el chat y listo! También puedes personalizar más su comportamiento con los siguientes comandos:

/help — muestra este mensaje
/language — cambia el idioma
/captcha — cambia el tipo de captcha usado
/timeLimit — cambia la cantidad de tiempo otorgada a los recién llegados
/lock — hace que estos comandos solo sean accesibles a los administradores
/restrict — restringe a los recién llegados a enviar solo mensajes de texto en las primeras 24 horas
/deleteEntryMessages — borra los mensajes sobre la entrada de usuarios
/greeting — saluda a los mensajes que pasan el test
/trust — utiliza este comando para responder al mensaje de un usuari que no quieras comprobar
/ban — same as trust, but the opposite
/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

¿Sigues con preguntas? Comprueba el canal de soporte — @borodutch\\_support. El código de Shieldy es código libre y puede ser encontrado [aquí](https://github.com/backmeupplz/shieldy). ¡Gracias!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    zh: `本机器人fork自Shieldy. — Shieldy是电报中打击恼人的垃圾信息发送者的最佳解决方案，它要求新手在一段时间内执行一个集合动作，否则就会踢它们，就这么简单。确保 @shieldy\\_bot是您的管理员，并且这就可以了！您还可以使用以下命令进一步设置课程：

/help — 显示此消息
/language — 切换语言
/captcha — 更改使用的验证码类型
/timeLimit — 更改给新手的时间
/lock — 使命令只能由管理员访问
/restrict — 限制新手在前24小时内仅能发送纯文本消息
/deleteEntryMessages — 删除有关用户加入的消息
/greeting — 迎接通过测试的用户
/trust — 使用此命令回复用户发送的您不想检查的消息
/ban — same as trust, but the opposite
/strict — 当你不希望收到任何新手的消息但使用验证码解决方案直到他们通过验证码时使用
/customCaptchaMessage — 设置自定义验证码消息
/deleteGreetingTime — 设置多少秒删除Shieldy的欢迎消息，像\`/deleteGreetingTime 100\`, 设置为0重置
/banUsers — 禁止还是踢出用户
/deleteEntryOnKick — 删除还是保留回答验证码失败的用户加入消息
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

还有问题吗？查看支持渠道 — @borodutch\\_support。 Shieldy代码是开源的，可以在[这里](https://github.com/backmeupplz/shieldy)找到。谢谢！

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    no: `Shieldy — er den beste løsningen i Telegram for å holde irriterende falske kontoer tilbake. Den spørr nykommere om å utføre et sett med handlinger innenfor er viss tidsperiode, hvis ikke blir brukeren kastet ut. Det er så enkelt. Gjør @shieldy\\_bot til admin i chatten din og alt er klart! Du kan videre endre oppførselen med de følgende kommandoene:

/help — viser denne meldingen
/language — bytter språk
/captcha — endrer hvilken type captcha som blir brukt
/timeLimit — endrer hvor mye tid som blir gitt til nykommere
/lock — gjør kommandoer tilgjengelig bare for administratorer
/restrict — begrenser nykommere til å bare kunne sende tekstmeldinger de første 24 timene
/deleteEntryMessages — sletter meldinger om brukerens adkomst
/greeting — sender en velkomst når en bruker består testen
/trust — svar med denne kommandoen til en melding sendt av en bruker du ikke vil skal sjekkes
/ban — same as trust, but the opposite
/strict — bruk når du ikke vil motta nykommernes meldinger untatt captcha løsninger før de har bestått testen
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Har du fortsatt spørsmål? Sjekk ut vår støtte-kanal — @borodutch\\_support. Shieldy's kode er åpen og kan bli funnet [her](https://github.com/backmeupplz/shieldy). Takk!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    de: `Shieldy — is the best solution in Telegram to fight annoying spammers. It asks newcomers to execute a set action within a set period, otherwise it kicks them. It's this easy. Make sure @shieldy\\_bot is an admin at your chat and it's all done! You can also further setup the behaviour with the following commands:

/help — zeigt diese Nachricht an
/language — ändert die Sprache
/captcha — ändert die Art des Captchas, welches genutzt wird
/timeLimit — ändert das Zeitlimit für neue User
/lock — lässt nur Admin Kommandos zu
/restrict — schränkt neue User ein, in den ersten 24 Stunden nur Text Nachrichten zu senden (keine Links, Bilder etc.)
/deleteEntryMessages — löscht die Beitrittsnachricht über neue User im Kanal z.B. "User xxx ist beigetreten"
/greeting — begrüßt die User, welche den Test bestehen
/trust — antworte mit diesem Kommando auf eine vorherige Nachricht, um diesen User nicht mehr zu überprüfen
/ban — same as trust, but the opposite
/strict — benutze dieses Kommando, wenn du keine Beitrittsnachricht für neue User bekommen möchtest, bis sie den Captcha Test bestanden haben
/customCaptchaMessage — eigene Captcha Nachricht anlegen
/deleteGreetingTime — hier kannst du einstellen, wann die Willkommens Nachricht von Shieldy gelöscht werden soll. \`/deleteGreetingTime 100\`, zurück setzen kannst du dies mit dem Wert "0"
/banUsers — hier kannst du User bannen oder kicken
/deleteEntryOnKick — hier kannst du die Beitrittsnachricht löschen, wenn ein User den Captcha Test nicht besteht
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Noch Fragen? Schau in unseren Support Kanal — @borodutch\\_support. Der Shieldy code ist open source und kann hier gefunden werden: https://github.com/backmeupplz/shieldy. Vielen Dank!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    tw: `Shieldy — 是 Telegram 中打擊惱人的垃圾信息發送者的最佳解決方案，它要求新進成員在一段時間內執行一個任務，否則就會踢它們，就這麼簡單。確保 @shieldy\\_bot 是群組的管理員，就可以了！您還可以使用以下指令進一步設定：

/help — 顯示此內容
/language — 切換語言
/captcha — 更改使用的驗證類型
/timeLimit — 更改給新進成員驗證的時間
/lock — 使指令只能由管理員使用
/restrict — 限制新進成員在前 24 小時內僅能發送純文字消息
/deleteEntryMessages — 刪除有關新進成員加入的系統消息
/greeting — 給通過驗證的用戶發歡迎詞
/trust — 使用此指令回復任何您信任不想驗證的成員
/ban — same as trust, but the opposite
/strict — 限制新進成員在通過驗證前不能發任何消息
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

還有問題嗎？查看支援管道 — @borodutch\\_support。 Shieldy 代碼是開源的，可以在[這裡](https://github.com/backmeupplz/shieldy)找到。謝謝！

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    fr: `Shieldy — est la meilleure solution sur Telegram pour combattre les spammeurs. Il demande aux nouveaux membres d'exécuter une action définie dans un certain délais, sinon on lui donne un coup de pied au c... . C'est aussi simple. Assurez-vous que le bot @shieldy\\_bot est bien admin de votre groupe et c'est terminé ! Vous pouvez également configurer les différentes options via les commandes suivantes :

/help — Afficher le message
/language — Changer de langues
/captcha — Modifier le type de captcha à utiliser
/timeLimit — Modifier le temps lorsqu'un nouveau membre arrive
/lock — Faire en sorte que seuls les admins puissent accèder aux commandes
/restrict — Interdit pendant 24h aux nouveaux membres la possibilité d'envoyer un message
/deleteEntryMessages — Supprime les messages concernant l'arrivée des nouveaux membres
/greeting — Accueillir les utilisateurs qui passent le test
/trust — Utilisez cette commande à un message d'utilisateur que vous ne voulez pas vérifier
/ban — same as trust, but the opposite
/strict — Utilisez cette fonction si vous ne souhaitez plus recevoir les messages de nouveaux membres, jusqu'à ce qu'ils passent le test du captcha
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Vous avez des questions ? Consultez le support sur notre canal — @borodutch\\_support. Le code de Shieldy code est en open source et est disponible à l'adresse suivante [ici](https://github.com/backmeupplz/shieldy). Merci!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    id: `Shieldy adalah solusi terbaik untuk melawan spammer di Telegram. Yaitu dengan menguji anggota baru dengan melakukan sesuatu dalam batas waktu tertentu, jika gagal maka anggota baru akan ditolak bergabung. Pastikan @shieldy\\_bot menjadi admin di grup anda. Tersedia pengaturan tambahan dengan perintah berikut:

/help — menampilkan pesan bantuan ini
/language — mengganti pilihan bahasa
/captcha — mengubah jenis ujian yg dipakai
/timeLimit — mengubah batasan waktu ujian
/lock — batasi perintah hanya bisa dijalankan oleh admin saja
/restrict — batasi anggota baru hanya boleh mengirim pesan teks dalam 24 jam pertama
/deleteEntryMessages — hapus pesan sambutan pada anggota baru
/greeting — pesan sambutan pada anggota baru yg lolos ujian
/trust — balas dengan pesan ini ke anggota untuk meloloskannya tanpa ujian
/ban — same as trust, but the opposite
/strict — larang anggota baru mengirim pesan apa pun jika belum lolos ujian
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Masih ada pertanyaan? Gabung saja dengan kanal @borodutch\\_support. Shieldy berkode terbuka dan tersedia di [sini](https://github.com/backmeupplz/shieldy). Terima kasih!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ko: `Shieldy 는 짜증나는 스패머들에 대응하기 위한 최고의 해결책입니다. 이 봇은 신규 입장자들에게 정해진 시간내에 정해진 행동을 실행하도록 요청하고, 정해진 행동을 하지 않으면 그들을 자동 추방시킵니다. 사용법은 정말 간단합니다.@shieldy\\_bot 가 채팅 그룹에서 관리자인지 확인을 하십시오. 모든 준비는 끝났습니다.!아래와 같은 명령을 사용하여 추가로 설정할 수도 있습니다:

/help – 이 메시지를 보여줍니다
/language – 언어 변경
/captcha – 사용된 captcha의 설정 변경
/timeLimit – 신규 입장자들에게 정해진 시간 변경
/lock – 관리자만 접근할 수 있는 명령 만들기
/restrict – 신규 입장자들은 24시간 동안 메시지만 보내도록 제한
/deleteEntryMessages — 사용자 항목에 대한 메시지 삭제
/greeting – 테스트에 통과한 사람에게 환영 인사
/trust — 사용자가 확인하지 않으려는 메시지에 이 명령으로 회신
/ban — same as trust, but the opposite
/strict — 새로 온 사람의 메시지를 받지 않고 captcha 솔루션이 captcha를 통과할 때까지 수신하고 싶을 때 사용하십시오.
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

여전히 궁금한 사항이 있나요? 지원 채널 — @borodutch\\_support 을 확인해주세요. Shieldy 의 코드는 오픈소스 이며 (https://github.com/backmeupplz/shieldy) 에서 확인이 가능합니다. 감사합니다!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    am: `Shieldy — is the best solution in Telegram to fight annoying spammers. It asks newcomers to execute a set action within a set period, otherwise it kicks them. It's this easy. Make sure @shieldy\\_bot is an admin at your chat and it's all done! You can also further setup the behaviour with the following commands:

/help — ይህንን መልክት ያሳያል
/language — ቋንቋ ይቀይራል
/captcha — የ captcha አይነቱን ይቀይራል
/timelimit — አዲስ ተጠቃሚ ሲገባ ለስንት ጊዜ አንደማያወራ
/Lock — ኮማንዶቹ በአድሚን ብቻ እንዲከፈት ያረጋል
/restrict — አዲስ ተጠቃሚ ሲገባ ለ24 ሰዐት ጸሁፍ ብቻ መጻፍ እንዲችል
/deleteEntryMessages — ተጠቃሚ ሲገባ ሜሴጅ እንዳይኖር
/greeting — ተጠቃሚው ካፕቻ ካለፈ የሚኖር ሜሴጅ
/trust — reply with this command to a message sent by user that you don't want to check
/ban — same as trust, but the opposite
/strict — አዲስ ተጠቃሚ ሲገባ ሜሴጅ እንዳይኖር
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Still got questions? Check out the support channel — @borodutch\\_support. Shieldy code is open source and can be found [here](https://github.com/backmeupplz/shieldy). Thank you!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,

    cz: `Shieldy — je to nejlepší řešení na Telegramu v boji proti otravným spammerům. Požádá nováčky, aby provedli nastavenou akci ve stanovené lhůtě, jinak je vyhodí. Je to tak snadné. Ujistěte se, že @shieldy\\_bot je administrátor skupiny a to je vše! Nastavení můžete provést dle následujících příkazů:

/help — ukáže tuto zprávu
/language — výběr jazyka
/captcha — změní typ testu
/timeLimit — změní čas pro splnění testu pro nováčky
/lock — zpřístupní příkazy pouze správcům
/restrict — omezí nováčky pouze na posílání textových zpráv prvních 24 hodin
/deleteEntryMessages — smaže zprávu o vstupu nováčka do skupiny
/greeting — pozdraví nováčky, kteří projdou testem
/trust — odpovězte tímto příkazem na zprávu uživatele, kterého nechcete kontrolovat
/ban — same as trust, but the opposite
/strict — použijte, pokud nechcete dostávat žádné zprávy od nováčků, dokud neprojdou testem
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Ještě máte nějaké otázky? Navštivte support channel — @borodutch\\_support. Shieldy kód je open source najdete ho [zde](https://github.com/backmeupplz/shieldy). Děkuji!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    sk: `Shieldy — najlepšie riešenie v boji proti otravným spamerom na Telegrame. Žiada od nováčikov, aby vykonali určitý krok v stanovenom čase, inak ich vyhodí. Je to také jednoduché. Nastavte @shieldy\\_bot ako správcu vo vašom čete a to je všetko! Pre podrobnejšie nastavenie správania môžete využiť tieto príkazy:

/help — zobrazí túto správu
/language — výber jazyka
/captcha — typ testu captcha
/timeLimit — čas na splnenie testu nováčikom
/lock — sprístupní príkazy iba správcom
/restrict — obmedzí nováčikov počas prvých 24 hodín na posielanie výlučne textových správ
/deleteEntryMessages — odstráni správu o vstupe nováčika do skupiny
/greeting — pozdrav pre používateľov, ktorí prejdú testom
/trust — odpovedzte týmto príkazom na správu používateľa, ktorého nechcete kontrolovať
/ban — same as trust, but the opposite
/strict — použite, ak nechcete prijímať žiadne správy pre nováčikov okrem riešení testu captcha, pokým ním neprejdú
/customCaptchaMessage — nastavenie vlastnej správy testu captcha
/deleteGreetingTime — nastavenie, kedy sa má odstrániť pozdrav Shieldyho v sekundách, napr. \`/deleteGreetingTime 100\`; resetuje sa tak, že ho nastavíte na 0
/banUsers — voľba banu alebo vyhodenia nováčika zo skupiny
/deleteEntryOnKick — voľba odstránenia vstupných správ pre používateľov, ktorí neprejdú testom captcha
/cas — voľba použitia služby Combot Anti-Spam
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Máte ďalšie otázky? Navštívte náš kanál podpory — @borodutch\\_support. Zdrojový kód Shieldyho je otvorený a nájdete ho [tu](https://github.com/backmeupplz/shieldy). Ďakujem!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ar: `Shieldy — هو أفضل حل في التيليجرام لمكافحة مرسلي الرسائل غير المرغوب فيها . يطلب من الأعضاء الجدد الخضوع لإختبارات معينة في غضون فترة محددة، وعندما لا يجتازون الإختبار فإنه يقوم بطردهم. الأمر بهذه السهولة تأكد من @shieldy\\_bot منح البوت صلاحية الآدمن! يمكنك أيضًا زيادة سلوكيات البوت بإستخدام الأوامر التالية:

/help — يظهر هذه الرسالة
/language — تغيير اللغة
/captcha — تغيير نوع الإختبار المستخدم
/timeLimit — تغيير مدة الإختبار للأعضاء الجدد
/lock — يجعل الأوامر قابلة للوصول فقط من قبل المسؤولين فقط
/restrict — يمنع الأعضاء الجدد من إرسال رسائل نصية فقط في أول 24 ساعة
/deleteEntryMessages — حذف رسائل دخول الأعضاء
/greeting — يقوم بتحية المستخدمين الذين يجتازون الاختبار
/trust — اختر هذا الخيار لإضافة اعضاء لا ترغب في ان يخوضوا الإختبار
/ban — same as trust, but the opposite
/strict — اختر هذا اذا كنت تريد تفعيل البوت لإجراء اختبار للأعضاء الجدد
/customCaptchaMessage — setup custom captcha message
/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like \`/deleteGreetingTime 100\`, reset by setting it to 0
/banUsers — whether to ban or to kick users
/deleteEntryOnKick — whether to delete entry messages for users who failed captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

لازال لديك اسئلة؟ تحقق من قناة الدعم — @borodutch\\_support. السورس كود مفتوح المصدر ويمكن العثور عليه [هنا](https://github.com/backmeupplz/shieldy). شكرأ!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ja: `Shieldy — は迷惑なスパマーに対してのTelegraの1番のソリューションになります。新しく参加した人に、一定の時間内に、特定のアクションを実行するように要求します。とてもシンプルです。 利用するにあたり、@shieldy \\ _ botをチャットの管理者に追加してください。以下のコマンドでbotのアクションを設定することもできます:

/help — このメッセージを表示する
/language — 言語を変更する
/captcha — キャプチャの種類を変更する
/timeLimit — 新しく参加した人に与えられる時間を変更する
/lock — 管理者だけがコマンドにアクセスできるようにする
/restrict — 新しく参加した人が最初の24時間はテキストメッセージしか投稿できないように制限をかける
/deleteEntryMessages — ユーザーが参加した情報を削除する
/greeting — テストを通過した人に挨拶をする
/trust —チェックしたくないユーザーからのメッセージに対してこのコマンドで返事をする
/ban — same as trust, but the opposite
/strict — 新しく参加した人がキャプチャをパスするまで、メッセージではなくキャプチャソリューションを受け取りたい時に使う
/customCaptchaMessage — キャプチャのメッセージをカスタマイズする
/deleteGreetingTime — \`/deleteGreetingTime 100\のように何秒間でShieldyのメッセージが消えるかを設定する。0に設定することでリセットされる
/banUsers — バンまたはユーザーを退出させる
/deleteEntryOnKick —キャプチャを失敗したユーザーの入室メッセージを削除するかどうか
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Still got questions? Check out the support channel — @borodutch\\_support. Shieldy code is open source and can be found [here](https://github.com/backmeupplz/shieldy). Thank you!
まだご不明な点がありますか？サポートチャネルをチェックしてください！ — @borodutch\\_support. Shieldyコードはオープンソースとなり、こちらで見ることができます https://github.com/backmeupplz/shieldy. ありがとう！

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ro: `Shieldy — este cea mai bună soluție de a lupta cu spamerii enervanți de pe Telegram. Le cere nou veniților să execute un set de acțiuni într-o perioadă setată de timp, altfel le dă kick. Atât de simplu este. Asigură-te ca @shieldy\\_bot este admin pe grupul tau și asta e tot! Pentru setări avansate, folosește comenzile de mai jos:

/help — arată acest mesaj
/language — schimbă limba
/captcha — schimbă tipul de captcha folosit
/timeLimit — schimbă limita de timp acordată nou veniților
/lock — face comenzile accesibile doar adminilor
/restrict — restricționează nou veniții să trimită doar mesaje text în primele 24 de ore
/deleteEntryMessages — șterge mesajele despre userii ce intră în grup
/greeting — salută utilizatorii ce au trecut testul
/trust — raspunde cu această comanda unui mesaj trimis de un user pe care doresti să nu îl verifice bot-ul
/ban — same as trust, but the opposite
/strict — utilizează atunci când dorești sa nu primești nici un mesaj din partea userilor noi, ci doar soluții captcha până când aceștia trec de captcha
/customCaptchaMessage — setează mesaj captcha custom
/deleteGreetingTime — setează când se ștearge salutul lui Shieldy în secunde, precum \`/deleteGreetingTime 100\`. resetează setând valoarea 0
/banUsers — alege între a bana sau la le da kick userilor
/deleteEntryOnKick — șterge mesajul de întâmpinare pentru userii ce nu au trecut de captcha
/cas — whether to use Combot Anti-Spam or not
/underAttack — toggle the mode to automatically kick all newcomers
/noAttack — disables Shieldy
/noChannelLinks — automatically delete messages that link to other telegram channels
/viewConfig — view the current Shieldy configuration
/buttonText — change the captcha button text in the form of \`/buttonText I'm not a bot!\`
/allowInvitingBots — whether users can invite other bots or not
/greetingButtons — setup buttons for greeting message

Still got questions? Check out the support channel — @borodutch\\_support. Shieldy code is open source and can be found [here](https://github.com/backmeupplz/shieldy). Thank you!

Also check out another one of my projects — [Todorant](https://todorant.com) ([iOS](https://apps.apple.com/us/app/todorant/id1482078243), [Android](https://play.google.com/store/apps/details?id=com.todorant)). It is a smart todo list app that uses cognitive psychology to trick your brain into finishing projects and showing results. It's free for 30 days with no strings attached, so go give it a shot if you want to improve your productivity. It helped me — it can help you as well.`,
    ca: `Shieldy — és la millor solució per a combatre els usuaris que publiquen missatges brossa als grups de Telegram. Els nouvinguts hauran de resoldre una sèrie de proves abans d'un temps determinat, i si no donen una respota correcta, els expulsarà. Tant senzill com això. Assegurat't que @shieldy\\_bot té permisos d'administrador al grup i llestos! Així i tot, també pots personalitzar aquest comportament amb les següents comandes:

/help — mostra aquest missatge
/language — canvia d'idioma
/captcha — canvia el tipus de CAPTCHA utilitzat
/timeLimit — canvia el temps de resposta otorgat als nouvinguts
/lock — fa que les comandes només siguin accessibles per als administradors
/restrict — restringeix als nouvinguts a només poder enviar missatges de text durant les primeres 24 hores
/deleteEntryMessages — esborra els missatges d'avís sobre l'entrada de nouvinguts
/greeting — saluda als usuaris que superen el test
/trust — fes servir aquesta comanda per a respondre al missatge d'un usuari que no vulguis comprovar
/ban — fa el mateix que trust, però bloquejant l'usuari
/strict — fes-lo servir quan no vulguis rebre cap missatge de nouvinguts excepte les solucions del captcha fins que el resolguin
/customCaptchaMessage — personalitza el missatge del captcha
/deleteGreetingTime — configura si s'ha d'eborrar el missatge de benvinguda al cap d'uns seguns (ex: \`/deleteGreetingTime 100\`), es restableix configurant-lo a 0
/banUsers — permet bloquejar i/o expulsar usuaris
/deleteEntryOnKick — suprimeix els missatges d'entrada dels usuaris que han fallat la prova
/cas — per si utilitzes Combot Anti-Spam o no
/underAttack — commuta el mode per expulsar automàticament tots els nouvinguts
/noAttack — desactiva en Shieldy
/noChannelLinks — suprimeix automàticament els missatges que enllacen amb altres canals de telegrama
/viewConfig — veure la configuració actual den Shieldy
/buttonText — canvia el text del botó del CAPTCHA així: \`/buttonText I'm not a bot!\`
/allowInvitingBots — per si els usuaris poden convidar altres robots o no
/greetingButtons — configura els botons per al missatge de benvinguda

Encara tens dubtes? Visita el nostre canal de suport: @borodutch\\_support. En Shieldy està fet en codi obert i el pots trobar [aquí](https://github.com/backmeupplz/shieldy). Moltes gràcies!

P.S.: si vols contribuir al desenvolupament d'aquest bot, per favor, fes un donatiu mitjançant el programa de patrocinadors GitHub que trobaràs [aquí](https://github.com/sponsors/backmeupplz).`,
  },
  language: {
    en: 'Please, select the language.',
    ru: 'Пожалуйста, выберите язык.',
    it: 'Prego, seleziona la lingua.',
    et: 'Palun valige keel.',
    uk: 'Будь ласка, виберіть мову.',
    br: 'Por favor, selecione uma língua.',
    tr: 'Lütfen dil seçimi yapın.',
    es: 'Por favor, selecciona el idioma.',
    zh: '请选择一种语言。',
    no: 'Vennligst velg et språk.',
    de: 'Bitte wähle eine Sprache.',
    tw: '請選擇一種語言。',
    fr: 'Sélectionnez la langue',
    id: 'Silakan pilih bahasa.',
    ko: '언어를 선택하십시오.',
    am: 'ቋንቋ ምረጡ።',
    cz: 'Prosím, vyber jazyk.',
    sk: 'Vyberte jazyk.',
    ar: 'الرجاء إختيار اللغة.',
    ja: '言語を選択してください。',
    ro: 'Te rog, salectează limba.',
    ca: "Per favor, tria l'idioma",
  },
  language_selected: {
    en: 'Great, I speak English now.',
    ru: 'Отлично, я теперь говорю по-русски.',
    it: 'Perfetto, Ora parlo Italiano.',
    et: 'Väga hea, nüüd ma räägin eesti keeles.',
    uk: 'Чудово, тепер я розмовляю українською.',
    br: 'Boa, Agora eu falo português.',
    tr: 'Harika, artık Türkçe konuşuyorum.',
    es: 'Genial, ahora hablo español.',
    zh: '很棒，现在我讲中文了。',
    no: 'Supert, nå snakker jeg norsk.',
    de: 'Großartig, ich spreche nun deutsch.',
    tw: '很棒，現在我講中文了。',
    fr: 'Parfait, je parle français',
    id: 'Baiklah. Saya berbahasa Indonesia sekarang.',
    ko: '좋아요, 나는 이제 한국어로 말합니다.',
    am: 'አሪፍ አሁን አማርኛ አወራለሁ።',
    cz: 'Skvělé, nyní mluvím česky.',
    sk: 'Skvelé, teraz hovorím po slovensky.',
    ar: 'عظيم، أنا أتكلم العربية الآن.',
    ja: 'はい、私は日本語が喋れます。',
    ro: 'Perfect, acum vorbesc Română.',
    ca: 'Fantàstic! ara parlo català.',
  },
  only_author_can_reply: {
    en: 'Only the person who initiated the menu can select the choices.',
    ru: 'Только человек, вызвавший меню, может выбирать опции.',
    it: 'Solamente chi ha invocato il comando può selezionarlo.',
    et: 'Ainult see, kes avas menüüd, saab valida valikud.',
    uk: 'Тільки людина, яка викликала меню, може вибирати опції.',
    br: 'Apenas a pessoa que iniciou o menu pode selecionar as opções.',
    tr: 'Yalnızca menüyü başlatan kişi seçenekleri seçebilir.',
    es: 'Solo la persona que inició el menú puede seleccionar las opciones.',
    zh: '只有启动菜单的人才能选择。',
    no: 'Bare personen som åpnet menyen kan svare på den.',
    de:
      'Nur die Person, welche das Menü initialisiert hat, kann Einstellungen vornehmen.',
    tw: '只有啓動菜單的人才能選擇。',
    fr:
      'Seule la personne qui a déclanché ce menu peut sélectionner les options',
    id: 'Hanya orang yg meminta menu yg bisa menentukan pilihan.',
    ko: '메뉴를 시작한 사람만이 선택을 할 수 있습니다.',
    am: 'ሜኑውን ያስጀመረው ሰዉ ብቻ ነው መክፈት የሚችለው ።',
    cz: 'Možnost může vybrat jen osoba, která nabídku vyvolala.',
    sk: 'Možnosti môže vybrať iba osoba, ktorá spustila ponuku.',
    ar: 'فقط الشخص الذي بدأ القائمة يمكنه تحديد الخيارات.',
    ja: '最初にメニューを開いた人だけが、選択することができます。',
    ro: 'Doar persoana ce a inițiat meniul poate selecta',
    ca: 'Només pot triar les opcions la persona que ha posat en marxa el menú.',
  },
  captcha: {
    en: `Please, select the test type for the newcomers:

• Simple — bot will ask to send anything to the chat
• Button — bot will ask to press a button
• Digits — bot will ask to solve a simple arithmetic operation
• Image — bot will ask to recognize characters on an image`,
    ru: `Пожалуйста, выберите тип проверки новичков в чате:

• Простая — бот попросит прислать что угодно в чат
• Кнопкой — бот попросит нажать на кнопку
• Цифровая — бот попросит решить простую арифметическую задачу
• Картинкой — бот попросит распознать символы на картинке`,
    it: `Prego, seleziona uno dei seguenti test per i nuovi arrivati:

• Semplice — Il bot chiederà di inviare qualcunque messaggio in chat
• Bottone — Il bot chiederà di premere un pulsante
• Digits — bot will ask to solve a simple arithmetic operation
• Image — bot will ask to recognize characters on an image`,
    et: `Palun valige uustulnukute kontrolli tüüp:

• Lihtne — bot küsib vestlusele midagi saata
• Nuppuga — bot küsib nuppu klõpsata.
• Digits — bot will ask to solve a simple arithmetic operation
• Image — bot will ask to recognize characters on an image`,
    uk: `Будь ласка, виберіть тип перевірки новачків у чаті:

• Проста — бот просить надіслати що завгодно в чат
• Кнопкою — бот просить натиснути на кнопку.
• Цифрова — бот просить вирішити просте арифметичне рівняння
• Зображення — бот просить розпізнати символи на зображенні`,
    br: `Por favor, selecione o tipo de teste para os novatos:

• Simples — o bot vai pedir para mandar alguma coisa no chat
• Botão — o bot vai pedir para apertar um botão
• Digits — bot will ask to solve a simple arithmetic operation
• Image — bot will ask to recognize characters on an image`,
    tr: `Lütfen, yeni gelenler için test türünü seçin:

• Basit — Bot, sohbete bir şey göndermenizi isteyecektir
• Düğme — Bot, bir düğmeye basmanızı isteyecektir
• Rakamlar — Bot, basit bir aritmetik işlemi çözmenizi isteyecektir
• Resim — Bot, bir resimdeki karakterleri tanımanızı isteyecektir.`,
    es: `Por favor, selecciona el tipo de test para los recién llegados:

• Simple — el bot pedirá enviar lo que sea por el chat
• Botón — el bot pedirá presionar un botón
• Dígitos — el bot pedirá resolver una ecuación simple
• Imagen — el bot pedirá reconocer los caracteres de una imagen`,
    zh: `请为新人选择测试类型：

•简单 — 机器人会要求向聊天发送任何内容
•按钮 — 机器人将要求按下一个按钮
•数字 — 机器人将要求解决一个简单的等式
• Image — bot will ask to recognize characters on an image`,
    no: `Vennligst velg testtypen for nykommere:

• Enkel — botten vil spørre om å sende hva som helst i chatten
• Knapp — botten vil spørre om å trykke en knapp
• Tall — botten vil spørre om å løse et enkelt matteproblem
• Image — bot will ask to recognize characters on an image`,
    de: `Bitte wähle aus, wie der Bot neue User testen wird:

• Simpel — Der Bot wird fragen, irgendwas in den Chat zu senden
• Knopf — Der Bot wird fragen, einen Knopf zu drücken
• Nummern — Der Bot wird eine simple Mathe-Aufgabe stellen
• Image — bot will ask to recognize characters on an image`,
    tw: `請為新進成員選擇驗證類型：

• 簡單 — 機器人會要求在聊天室發送任何內容
• 按鈕 — 機器人將要求按下一個按鈕
• 數字 — 機器人將要求解答一個簡單的數學問題
• Image — bot will ask to recognize characters on an image`,
    fr: `Veuillez sélectionner le type de test pour les nouveaux membres

• Simple — Le bot demande d'envoyer une réponse à la conversation
• Bouton — Le bot demande d'appuyer sur un bouton
• Chiffres — Le bot pose une simple équation
• Image — bot will ask to recognize characters on an image`,
    id: `Silakan pilih jenis ujian untuk anggota baru:

• Salam — bot akan meminta salam perkenalan
• Tombol — bot akan meminta menekan tombol
• Angka — bot akan meminta jawaban hitungan
• Image — bot will ask to recognize characters on an image`,
    ko: `신규 입장자에 대한 테스트 유형을 선택하십시오:

• 단순함 — 봇이 채팅에 어떤 것이든 보내달라고 할 수 있음
• 버튼 — 봇이 버튼을 누르라고 요청함
• 숫자 — 봇이 간단한 방정식을 풀라고 할 것이다.
• Image — bot will ask to recognize characters on an image`,
    am: `Please, select the test type for the newcomers:

• ሲምፕል — ቦቱ ማንኛውንም ጸሁፍ እንዲልኩ ይጠይቃል።
• በተን — ቦቱ በተን አንዲነካ ይጠይቃል።
• ዲጂት — በቱ መልሰ ይጠየቃል።
• Image — bot will ask to recognize characters on an image`,
    cz: `Vyberte prosím typ testu pro nováčky:

• Jednoduchý — bot požádá o zaslání jakékoliv zprávy do chatu
• Tlačítko — bot požádá o stisk tlačítka
• Číselný — bot požádá o vyřešení jednoduchého příkladu
• Image — bot will ask to recognize characters on an image`,
    sk: `Vyberte typ testu pre nováčikov:

• Jednoduchý — bot požiada o zaslanie akejkoľvek správy do četu
• Tlačidlo — bot požiada o stlačenie tlačidla
• Číselný — bot požiada o výsledok jednoduchého matematického príkladu
• Image — bot will ask to recognize characters on an image`,
    ar: `الرجاء تحديد نوع الاختبار للأعضاء الجدد:

• بسيطة — سوف يطلب البوت لإرسال أي شيء إلى الدردشة
• زر سوف يطلب البوت الضغط على زرالشرطة
• أرقام — سوف يطلب البوت حل معادلة بسيطة
• Image — bot will ask to recognize characters on an image`,
    ja: `新しく参加した人へのテストの種類を選択してください’

• シンプル — botが何か発言してくださいと尋ねます
• ボタン — botがボタンを押してくださいとお願いします
• 数字 — botが簡単な算数の問題を解いてくださいと尋ねます
• Image — bot will ask to recognize characters on an image`,
    ro: `Selectează tipul de test pentru nou veniți:

• Simplu — bot-ul va cere userului să trimită orice în chat
• Buton — bot-ul va cere userului să apese un buton
• Cifre — bot-ul va cere userului să rezolve o simplă operație aritmetică
• Image — bot will ask to recognize characters on an image`,
    ca: `Per favor, tria la prova que han de passar els nouvinguts:

• Simple — el bot et demanarà que eviis qualsevol cosa a la conversa
• Botó — el bot et demanarà que pitgis un botó
• Dígits — el bot voldrà que resolguis una equació molt senzilla
• Imatge — el bot et demanarà que reconeguies els caracters d'una imatge`,
  },
  simple: {
    en: 'Simple',
    ru: 'Простая',
    it: 'Semplice',
    et: 'Lihtne',
    uk: 'Проста',
    br: 'Simples',
    tr: 'Basit',
    es: 'Simple',
    zh: '简单',
    no: 'Enkel',
    de: 'Simpel',
    tw: '簡單',
    fr: 'Simple',
    id: 'Salam',
    ko: '단순함',
    am: 'ሲምፕል',
    cz: 'Jednoduchý',
    sk: 'Jednoduchý',
    ar: 'بسيطه',
    ja: '簡単',
    ro: 'Simplu',
    ca: 'Simple',
  },
  digits: {
    en: 'Digits',
    ru: 'Цифровая',
    it: 'Digita',
    et: 'Digitaalne',
    uk: 'Цифрова',
    br: 'Digitos',
    tr: 'Rakamlar',
    es: 'Digitos',
    zh: '数字',
    no: 'Tall',
    de: 'Zahlen',
    tw: '數字',
    fr: 'Chiffres',
    id: 'Angka',
    ko: '방정식',
    am: 'ዲጂት',
    cz: 'Číselný',
    sk: 'Číselný',
    ar: 'ارقام',
    ja: '数字',
    ro: 'Cifre',
    ca: 'Dígits',
  },
  button: {
    en: 'Button',
    ru: 'Кнопкой',
    it: 'Bottone',
    et: 'Nuppuga',
    uk: 'Кнопкою',
    br: 'Botão',
    tr: 'Düğme',
    es: 'Botón',
    zh: '按钮',
    no: 'Knapp',
    de: 'Knopf',
    tw: '按鈕',
    fr: 'Bouton',
    id: 'Tombol',
    ko: '버튼',
    am: 'በተን',
    cz: 'Tlačítko',
    sk: 'Tlačidlo',
    ar: 'زر',
    ja: 'ボタン',
    ro: 'Buton',
    ca: 'Botó',
  },
  image: {
    en: 'Image',
    ru: 'Картинкой',
    it: 'Immagine',
    uk: 'Зображення',
    tr: 'Resim',
    es: 'Imagen',
    de: 'Bild',
    ca: 'Imatge',
  },
  captcha_selected: {
    en: 'Great, I will use this type of test then.',
    ru: 'Отлично, теперь я буду использовать этот тип теста.',
    it: 'Fantastico, Userò questo tipo di test.',
    et: 'Väga hea, nüüd ma kasutan seda testi tüüpi.',
    uk: 'Чудово, тепер я буду використовувати цей тип тесту.',
    br: 'Boa, Eu irei usar esse tipo de teste agora.',
    tr: 'Harika, o zaman bu tür bir test uygulayacağım.',
    es: 'Genial, usaré este tipo de test.',
    zh: '很棒，我之后会使用这个类型的测试',
    no: 'Supert, da vil jeg bruke denne type testen.',
    de: 'Großartig, ich werde diese Art des Tests nutzen.',
    tw: '很棒，我之後會使用這個類型的驗證',
    fr: 'Parfait, je vais utiliser ce type de test',
    id: 'Baiklah, jenis ujian tersebut yg akan dipakai.',
    ko: '좋아요. 그러면 이런 종류의 테스트를 사용하겠습니다.',
    am: 'አሪፍ እንደዚህ አይነት ቴሰት እጠቀማለሁ ።',
    cz: 'Skvělé, budu používat tento typ testu.',
    sk: 'Skvelé, budem teda používať tento typ testu.',
    ar: 'تم سوف استخدم هذا النوع من الاختبار .',
    ja: 'はい、このタイプのテストを使います。',
    ro: 'Perfect, o să utilizez acest tip de test.',
    ca: 'Perfecte, faré servir aquesta prova.',
  },
  time_limit: {
    en:
      'Please, select how many seconds will newcomers get to complete the test before the kick.',
    ru:
      'Пожалуйста, выберите, сколько секунд будет у новичков, чтобы завершить тест перед киком.',
    it:
      'Prego, seleziona quanti secondi avrà il nuovo membro per completare il test prima di essere kickato',
    et:
      'Palun valige kui palju aega antud uustulnukatele, et testi sooritada enne kicki.',
    uk:
      'Будь ласка, виберіть, скільки секунд буде у новачків, щоб завершити тест перед вилученням з чату.',
    br:
      'Por favor, selecione quantos segundos o novato tem para completar o teste.',
    tr:
      'Lütfen, yeni gelenlerin kovulmadan önce testi tamamlaması gereken saniyeyi seçin.',
    es:
      'Por favor, seleccione cuántos segundos tendrán los recién llegados para completar el test antes de la expulsión.',
    zh: '请选择新人在被踢除前完成测试的秒数。',
    no:
      'Vennligst velg hvor mange sekunder nykommere vil ha på å fullføre testen før brukeren blir sparket.',
    de:
      'Bitte wähle, wieviele Sekunden ein neuer User zeit hat, um den Test fertig zu stellen, bevor er gekicked wird.',
    tw: '請選擇新進成員在被踢除前有多少秒數可以完成驗證。',
    fr: `Veuillez sélectionner le temps (en secondes) qu'un utilisateur aura pour terminer le test avant d'être inquieté`,
    id:
      'Silakan tentukan berapa detik yg dibutuhkan anggota baru untuk menanggapi sebelum ditolak bergabung.',
    ko: '신규 입장자가 추방 전에 테스트를 완료 할 시간을 선택하십시오.',
    am: 'ለስንት ሰከንድ ልጠብቅ ከማባረሬ በፊት',
    cz:
      'Prosím, zvolte kolik sekund bude mít nováček na splnění testu, než bude vyhozen.',
    sk:
      'Vyberte, koľko sekúnd bude mať nováčik na splnenie testu predtým, ako bude vyhodený.',
    ar:
      'من فضلك، حدد عدد الثواني التي يمكن للأعضاء الجدد إكمال الاختبار خلالها قبل طردهم.',
    ja:
      '新しく参加した人が退出させられるまでにテストを完了する時間を何秒間にするかを選択してください。',
    ro:
      'Te rog selectează câte secunde au la dispoziție userii noi să completeze testul, înainte sa fi dați afară.',
    ca:
      'Per favor, tria quants segons he de donar als nouvinguts per a resoldre la prova abans que els expulsi.',
  },
  time_limit_selected: {
    en: 'Great, I will use this time limit then.',
    ru: 'Отлично, теперь я буду использовать этот временной лимит.',
    it: 'Magnifico, Ora userò questo tempo',
    et: 'Väga hea, nüüd ma kasutan seda aja limiiti.',
    uk: 'Чудово, тепер я буду використовувати це обмеження часу.',
    br: 'Boa, Eu irei usar esse tempo limite agora.',
    tr: 'Harika, o zaman bu süreyi kullanacağım.',
    es: 'Genial, usaré este límite de tiempo.',
    zh: '很棒，我之后会使用这个时间限制。',
    no: 'Supert, da skal jeg bruke denne tidsbegrensningen.',
    de: 'Toll, ich benutzte dann dieses Zeit Limit.',
    tw: '很棒，我之後會使用這個時間限制。',
    fr: `Parfait, j'utiliserai cette limite de temps`,
    id: 'Baiklah, batas waktu tersebut yg akan dipakai.',
    ko: '좋아요, 이 시간 제한을 사용하겠습니다.',
    am: 'እሺ ይሄን ያህል ሰከንድ እጠብቃለሁ ።',
    cz: 'Skvělé, budu používat tento časový limit.',
    sk: 'Skvelé, budem teda používať tento časový limit.',
    ar: 'عظيم، سأستخدم هذا الحد الزمني .',
    ja: 'はい、この時間制限を使います。',
    ro: 'Super, o să folosesc această limită de timp',
    ca: 'Molt bé doncs, faré servir aquest límit de temps',
  },
  seconds: {
    en: 'sec',
    ru: 'сек',
    it: 'sec',
    et: 'sek',
    uk: 'сек',
    br: 'sec',
    tr: 'san',
    es: 'seg',
    zh: '秒',
    no: 'sek',
    de: 'sek',
    tw: '秒',
    fr: 'sec',
    id: 'detik',
    ko: '초',
    am: 'ሰከንድ',
    cz: 's',
    sk: 's',
    ar: 'ثانية',
    ja: '秒',
    ro: 'sec',
    ca: 'seg',
  },
  lock_true: {
    en: 'Great! Now I will only react to commands sent by admins.',
    ru: 'Отлично! Теперь я буду принимать команды только от админов.',
    it: 'Perfetto, Ora eseguirò solamente i comandi inviati da amministratori.',
    et: 'Väga hea, nüüd ma aktsepteerin ainult administraatorite käske.',
    uk: 'Чудово! Тепер я буду приймати команди тільки від адміністраторів.',
    br: 'Boa! Agora só obedecerei os ADMs.',
    es:
      '¡Genial! Ahora solo reaccionaré a los comandos enviados por administradores.',
    tr:
      'Harika! Şimdi sadece yöneticiler tarafından gönderilen komutlara tepki vereceğim.',
    zh: '很棒！现在我只对管理员发送的命令作出反应。',
    no: 'Supert! Nå vil jeg bare svare på kommandoer gitt av administratorer.',
    de: 'Super! Ich werde nun nur noch auf Admin Kommandos reagieren.',
    tw: '很棒！現在我只對管理員發送的指令作出回應。',
    fr: 'Parfait, maintenant seuls les admins pourront utiliser les commandes',
    id: 'Baiklah, sekarang saya hanya menanggapi perintah dari admin saja.',
    ko: '좋아요! 이제 나는 관리자들이 보내는 명령에만 반응할 것입니다.',
    am: 'አሁን አድሚን ብቻ ይጠቀማል።',
    cz: 'Skvělé! Nyní budu reagovat pouze na příkazy poslané správci.',
    sk: 'Super! Odteraz budem reagovať iba na príkazy zadané správcami.',
    ar: 'رائع ! الآن سوف أتفاعل فقط مع الأوامر المرسلة من قبل المسؤولين.',
    ja: '素晴らしいです！これで管理者によるコマンドしか受け付けません。',
    ro: 'Super! Acum o să reacționez doar la comenzile date de către admini.',
    ca:
      "D'acord, a partir d'ara només faré cas a les ordres dels administradors.",
  },
  lock_false: {
    en: 'Great! Now I will react to commands sent by anybody.',
    ru: 'Отлично! Теперь я буду принимать команды ото всех.',
    it: 'Perfetto, Ora eseguirò i comandi inviati da tutti.',
    et: 'Väga hea, nüüd ma aktsepteerin kõik käsud.',
    uk: 'Чудово! Тепер я буду приймати команди від усіх.',
    br: 'Boa! Agora obedecerei a qualquer pessoa.',
    tr: 'Harika! Şimdi herkes tarafından gönderilen komutlara tepki vereceğim.',
    es: '¡Genial! Ahora reaccionaré a los comandos enviador por todo el mundo.',
    zh: '很棒！现在我对所有人发出的命令做出反应。',
    no: 'Supert! Nå vil jeg svare på kommandoer gitt av hvem som helst.',
    de:
      'Großartig! Ich werde nun wieder auf die Kommandos aller User reagieren.',
    tw: '很棒！現在我會對所有人發出的指令做出回應。',
    fr: `Parfait, maintenant n'importe qui pourra utiliser les commandes`,
    id: 'Baiklah, sekarang saya akan menanggapi perintah dari siapa pun.',
    ko: '좋아요! 이제 나는 누구든지 보낸 명령에 반응할 것입니다.',
    am: 'አሁን ሁሉም ሰው ይጠቀማል።',
    cz: 'Skvělé! Nyní budu reagovat na příkazy poslané kýmkoli.',
    sk: 'Super! Odteraz budem reagovať na príkazy zadané kýmkoľvek.',
    ar: 'رائع ! الآن سوف أرد على الأوامر المرسلة من قبل أي شخص.',
    ja: '素晴らしいです！これで、誰からのコマンドも受け付けます。',
    ro: 'Super! Acum o să reacționez la comenzile trimise de căre oricine. ',
    ca: "D'acord, a partir d'ara faré cas a les ordres de tothom.",
  },
  strict_true: {
    en:
      "Great! Now newcomers won't send anything but captcha solutions until they pass captcha.",
    ru:
      'Отлично! Теперь новички не смогут присылать ничего кроме решения капчи, до прохождения капчи.',
    uk:
      'Чудово! Тепер новачки не матимуть змоги надсилати у чат нічого окрім вирішення капчі, поки її не розввʼяжуть.',
    tr:
      "Harika! Artık yeni gelenler, CAPTCHA'yı geçinceye kadar CAPTCHA çözümlerinden başka bir şey gönderemeyecekler.",
    es:
      'Perfecto! A partir de este momento, los recién llegados, solamente podrán enviar los mensajes para responder la solucion del CAPTCHA, hasta que éste sea resuelto correctamente.',
    zh:
      '很棒！现在新手在通过验证码之前不会发送除验证码解决方案之外的任何内容。',
    no: 'Supert! Nå kan ikke nykommere sende noe før de har bestått testen.',
    de:
      'Spitze! Neue User können nun nichts senden, außer der Captcha Lösung, bis sie den Test bestanden haben.',
    tw:
      '很棒！現在新進成員在通過驗證之前不能發送除驗證解決方案之外的任何內容。',
    fr:
      "Parfait, maintenant les nouveaux membres devront d'abord répondre au captcha avant de pouvoir discuter",
    id:
      'Baiklah, sekarang anggota baru tidak bisa mengirim apa pun hingga menanggapi ujian dengan benar.',
    ko:
      '좋아! 이제 새로 온 사람들은 captcha를 통과 할 때까지 captcha 솔루션 외에는 아무것도 보내지 않을 것입니다.',
    am: 'አዲሰ ገቢ ካፕቻን ሳያልፍ ምንም መላክ አይችልም ።',
    cz: 'Skvělé! Nyní nováčci nemohou nic poslat, dokud neprojdou testem.',
    sk:
      'Výborne! Odteraz nováčikovia nebudú môcť poslať nič okrem riešenia testu captcha, až kým neprejdú týmto testom.',
    ar:
      'رائع ! الآن الأعضاء الجدد لن يرسلوا أي شيء سوى حلول الإختبار حتى يجتازونه .',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャをパスするまで、キャプチャの回答しかできません。',
    ro:
      'Perfect! Acum nou veniții vor putea trimite doar soluții captcha până când trec de testul captcha.',
    ca:
      "Entesos, a partir d'ara els nouvinguts, només podràn enviar missatges per a respondre amb la solució de la prova establerta, fins que aquesta sigui resolta correctament.",
  },
  strict_false: {
    en:
      'Great! Now newcomers will be able to send text before they pass captcha.',
    ru: 'Отлично! Теперь новички смогут отправлять текст до прохождения капчи.',
    uk:
      'Чудово! Тепер новачки матимуть змогу надсилати текст, поки не розвʼяжуть капчу.',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini geçmeden önce metin gönderebilecekler.',
    es:
      '¡Genial! A partir de este momento, los recién llegados, podrán enviar mensajes antes de que hayan resuelto el CAPTCHA correctamente.',
    zh: '很棒！现在，新手可以在通过验证码之前发送文本消息。',
    no: 'Supert! Nå kan nykommere sende meldinger før de har bestått testen.',
    de:
      'Wahnsinn! Neue User können nun Nachrichten senden, bevor sie den Captcha Test bestanden haben.',
    tw: '很棒！現在，新進成員可以在通過驗證之前發送文字消息。',
    fr: `Parfait, maintenant les nouveaux membres pourront discuter avant d'envoyer une réponse au captcha.`,
    id:
      'Baiklah, sekarang anggota baru boleh mengirim pesan walaupun belum menanggapi ujian.',
    ko:
      '좋아요! 이제 새로 온 사람들은 캡챠를 통과하기 전에 메시지를 보낼 수 있을 거예요.',
    am: 'አዲሰ ገቢ ካፕቻን ሳያልፍ ሜሴጅ መላክ ይችላል ።',
    cz: 'Skvělé! Nyní mohou nováčci posílat zprávy, než projdou testem.',
    sk:
      'Výborne! Odteraz nováčikovia budú môcť posielať textové správy predtým, ako prejdú testom captcha.',
    ar:
      'رائع ! الآن الأعضاء الجدد سوف يكونون قادرين على إرسال النص بدون الحاجة لإختبار .',
    ja:
      '素晴らしいです！、これで、新しく参加した人は、キャプチャをパスする前に、テキストを送信することができます。',
    ro:
      'Super! Acum nou veniții vor putea trimite text înainte de a trece de testul captcha.',
    ca:
      "Entesos, a partir d'ara els nouvinguts, podràn enviar missatges fins i tot abans de resoldre correctament la prova establerta.",
  },
  simple_warning: {
    en:
      ', please, send any message to this group within the time amount specified, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте любое сообщение в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    it:
      ', prego, invia un messaggio in questo gruppo entro il tempo specificato, altrimenti verrai kickato. Grazie!',
    et:
      ', palun saatke mis tahes sõnum sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть будь-яке повідомлення в цей чат протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, mande qualquer mensagem para esse grupo com o tempo limite especificado, caso contrário irei kicka-lo. Obrigado!',
    tr:
      ', Lütfen, belirtilen süre içerisinde bu gruba herhangi bir mesaj gönderin, aksi takdirde kovulursunuz. Teşekkür ederiz!',
    es:
      ', por favor, envía cualquier mensaje por este grupo dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    zh: '，请在指定的时间内向该群组发送任何消息，否则您将被踢。谢谢！',
    no:
      ', vennligst send hvilken som helst melding til denne gruppen innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte sende eine Nachricht innerhalb der genannten Zeit, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內在本群組發送任何消息，否則您將被踢。謝謝！',
    fr: `Veuillez répondre dans le délai, sinon vous ne serez pas le bienvenue ici. Merci d'avance !`,
    id:
      ', silakan sampaikan salam perkenalan dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 이 그룹에 메시지를 보내 주십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    cz:
      ', prosím, pošlete do této skupiny jakoukoliv zprávu ve stanoveném čase, jinak budete vyhozeni. Děkuji!',
    sk:
      ', prosím, pošlite do tejto skupiny v stanovenom čase akúkoľvek správu, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، إرسال أي رسالة إلى هذه المجموعة في غضون المدة الزمنية المحدد، وإلا سيتم طردك. شكرا!',
    ja:
      '指定された時間内に何かメッセージを送ってください。そうしないと、退出させられます。ありがとうございます！',
    ro:
      ', te rog, trimite orice mesaj către acest grup în timpul specificat, altfel o să fii dat afară în mod automat. Mulțumesc!',
    ca:
      ", per favor, envia un missatge qualsevol, dins aquest grup, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
  },
  digits_warning: {
    en:
      ', please, send the solution to the arithmetic operation provided within the time amount specified to this group, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте решение указанной арифметической задачи в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    it:
      ", prego, invia la soluzione dell'equazione matematica in questo gruppo entro il tempo specificato, altrimenti verrai kickato. Grazie!",
    et:
      ', palun saatke matemaatilise võrrandi lahendus sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть рішення вказаного математичного рівняння в цей чат протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, mande a solução da equação matemática para esse grupo no tempo limite especificado, caso contrário irei kicka-lo. Obrigado!',
    tr:
      ', Lütfen, sağlanan aritmetik işlem çözümünü belirtilen süre içerisinde bu gruba gönderin, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    es:
      ', por favor, envíe por este grupo la solución a la ecuación matemática proporcionada dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    zh: '，请在指定的时间内将答案发送到本群组，否则您将被踢。 谢谢！如果您现在不方便获取答案，请在被踢后重新申请加入。如果您遇到技术性问题，请联系群主 @brisiwbcywk',
    no:
      ', vennligst send svaret på matteproblemet innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte sende die Lösung zu der Mathe-Aufgabe innerhalb des spezifizierten Zeitlimits, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內將數學計算答案發送到本群組，否則您將被踢。 謝謝！',
    fr: `Veuillez envoyer votre réponse à l'équation dans le délai, sinon vous ne serez pas le bienvenue ici. Merci d'avance !`,
    id:
      ', silakan jawab soal hitungan tersebut dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 제공된 수학 방정식의 답을 채팅으로 보내십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    cz:
      ', prosím, pošli řešení matematické rovnice ve stanoveném čase, jinak budeš vyhozen. Děkuji!',
    sk:
      ', prosím, pošlite do tejto skupiny v stanovenom čase výsledok matematického príkladu, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، حل المعادلة الرياضية وإرسالها للدردشة قبل إنتهاء الوقت المحدد، وإلا سيتم طردك. شكرا!',
    ja:
      '指定された時間内に算数の正解を送信してください。そうしないと、退出させられます。ありがとうございます！',
    ro:
      ', te rog, trimite rezultatul operației aritmetice în timpul specificat, altfel o sa fii dat afară din grup în mod automat. Mulțumesc!',
    ca:
      ", per favor, envia dins aquest grup, la solució de l'operaió aritmètica proposada, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
  },
  button_warning: {
    en:
      ', please, press the button below within the time amount specified, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, нажмите на кнопку ниже в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    it:
      ', prego, clicca il bottone qui sotto entro il tempo prestabilito, altrimenti verrai kickato. Grazie!',
    et:
      ', palun klõpsake alam nuppu määratud aja jooksul, muide me kickime teid. Aitäh!',
    uk:
      ', будь ласка, натисніть на кнопку нижче протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, aperte o botão abaixo no tempo limite especificado, caso contrário irei kicka-lo, Obrigado!',
    tr:
      ', Lütfen, belirtilen süre içinde aşağıdaki düğmeye basın, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    es:
      ', por favor, presione el botón abajo dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    zh: '，请在指定的时间内按下面的按钮，否则你将被踢。谢谢！',
    no:
      'vennligst trykk knappen nedenfor innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte drücke den Knopf unten innerhalb des spezifizierten Zeitlimits, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內按下面的按鈕，否則您將被踢。謝謝！',
    fr: `, Veuillez appuyer sur le bouton ci-dessous dans le délai spécifié, sinon vous ne serez pas le bienvenue ici. Merci d'avance!`,
    id:
      ', silakan tekan tombol dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 아래 버튼을 누르십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    am: ', በተኑን ይንኩት ካለበለዛ ይባረራሉ',
    cz:
      ', prosím, stiskněte tlačítko ve stanoveném čase, jinak budete vyhozeni. Děkuji!',
    sk:
      ', prosím, stlačte tlačidlo nižšie v stanovenom čase, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، اضغط على الزر أدناه ضمن المدة الزمنية المحدد، وإلا سيتم طردك. شكرا!',
    ja:
      '指定された時間内に、下に表示されたボタンを押してください。そうしないと、退出させられます。ありがとうございます！',
    ro:
      ', te rog, apasă butonul de mai jos în timpul spefificat, altfel o să fii dat afară din grup în mod automat. Mulțumesc!',
    ca:
      ", per favor, pitja el botó d'aquest missatge abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
  },
  image_warning: {
    en:
      ', please, send the characters displayed within the time amount specified to this group, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте цифры с картинки в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    et:
      ', palun saatke matemaatilise võrrandi lahendus sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть зазначені символи у цей чат, поки не спливе вказаний час, або ви будете вилучені з чату. Дякуємо!',
    tr:
      ', Lütfen, bu gruba belirtilen süre içerisinde gösterilen karakterleri gönderin, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    es:
      ', por favor, envía en este grupo, los caracteres de la imagen dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    ca:
      ", per favor, envia dins aquest grup, els caràcters de la imatge, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
  },
  captcha_button: {
    en: 'I am not a bot',
    ru: 'Я не бот',
    it: 'Non sono un bot',
    et: 'Ma ei ole bot',
    uk: 'Я не бот',
    br: 'Não sou um robô',
    tr: 'Ben bir bot değilim',
    es: 'No soy un robot',
    zh: '我不是一个机器人',
    no: 'Jeg er ikke en bot',
    de: 'Ich bin kein Bot',
    tw: '我不是機器人',
    fr: 'Je ne suis pas un robot',
    id: 'Saya bukan bot',
    ko: '저는 봇이 아닙니다',
    am: 'ቦት አይደለውም',
    cz: 'Nejsem bot.',
    sk: 'Nie som bot',
    ar: 'أنا لست بوت',
    ja: '私はbotではありません。',
    ro: 'Nu sunt un bot',
    ca: 'No soc un robot',
  },
  only_candidate_can_reply: {
    en: 'Only the candidate for not being a bot can press this button.',
    ru:
      'Только кандидат на то, чтобы быть человеком, может нажимать на эту кнопку.',
    it: 'Solamente il candidato che non è un bot può premere questo bottone.',
    et: 'Selle nuppu saab klõpsata ainult kandidaat, kes soovib olla inimene.',
    uk: 'Тільки кандидат на те, щоб бути людиною, може натискати на цю кнопку.',
    br: 'Apenas o usuário citado pode apertar esse botão.',
    tr: 'Sadece bot olmayan bir aday bu düğmeye basabilir.',
    es: 'Solo el candidato para no ser un robot puede presionar este botón.',
    zh: '只有不是机器人的候选人才能按此按钮。',
    no: 'Bare kandidaten som blir testet kan trykke denne knappen.',
    de: 'Nur der User der kein Bot ist, kann diesen Knopf drücken.',
    tw: '只有需要被驗證的人才能按此按鈕。',
    fr: 'Seul le membre concerné peut appuyer sur ce bouton.',
    id: 'Hanya orang alias bukan bot yg bisa menekan tombol ini.',
    ko: '신규 입장자만 이 버튼을 누를 수 있습니다.',
    am: 'ቦት ያልሆኑ ብቻ ነዉ መንካት የሚችሉት።',
    cz: 'Toto tlačítko může stisknout jen nováček, který se zrovna připojil.',
    sk:
      'Toto tlačidlo môže stlačiť iba nováčik, ktorému bola správa adresovaná.',
    ar: 'فقط المرشح لعدم كونه بوت يمكن الضغط على هذا الزر.',
    ja: 'botではない候補の人だけがボタンを押すことができます。',
    ro: 'Doar candidații ce nu sunt boți pot apăsa acest buton.',
    ca:
      'Només allò que no és un robot, és el candidat ideal per a pitjar el botó.',
  },
  restrict_true: {
    en:
      'Great! Now all newcomers will only be able to send usual text messages to this chat.',
    ru:
      'Отлично! Теперь все новички смогут отправлять только текстовые сообщения первые сутки в чате.',
    uk:
      'Чудово! Тепер усі новачки протягом першої доби зможуть надсилати в чат тільки текстові повідомлення.',
    br:
      'Boa, Agora todos os novatos só poderam mandar mensagens de texto para esse chat.',
    tr:
      'Harika! Artık tüm yeni gelenler, bu sohbete yalnızca normal metin mesajları gönderebilecek.',
    es:
      '¡Genial! Ahora todos los recién llegados solo podrán enviar mensajes de texto en este chat.',
    zh: '很棒！现在所有新手都只能发送文本消息到这个群组。',
    no: 'Supert! Nå kan nykommere bare sende tekstmeldinger i chatten.',
    de:
      'Genial! Neue User können nun nur Textnachrichten senden, keine Bilder, Links o.ä.',
    tw: '很棒！現在所有新進成員僅能發送文字消息到這個群組。',
    fr:
      'Parfait, maintenant tous les nouveaux membres pourront envoyer uniquement des messages texte à cette discussion',
    id:
      'Baiklah, sekarang semua anggota baru hanya bisa mengirim pesan teks biasa di grup ini.',
    ko:
      '좋아요! 이제 모든 신규 입장자들은 이 채팅에 일반적인 문자 메시지만 보낼 수 있게 될 것입니다.',
    am: 'አዲስ ገቢዎች ቴክስት ብቻ ነዉ የሚልኩት።',
    cz:
      'Skvělé! Nyní mohou do tohoto chatu všichni nováčci posílat jen textové zprávy.',
    sk:
      'Skvelé! Odteraz všetci nováčikovia budú môcť do tohto četu posielať iba obvyklé textové správy.',
    ar:
      'رائع ! الآن جميع الأعضاء الجدد سوف يكونون قادرين فقط على إرسال الرسائل النصية المعتادة إلى هذه الدردشة.',
    ja:
      '素晴らしいです！これで、全ての新しく参加した人は、このチャットで普通のテキストメッセージを送ることができます。',
    ro:
      'Perfect! Acum toți nou veniții vor putea trimite orice fel de mesaje text către acest chat. ',
    ca:
      "Entesos, a partir d'ara, tots els nouvinguts, només podran enviar missatges de text en aquest grup.",
  },
  restrict_false: {
    en:
      'Great! Now all newcomers will be able to send any type of content to this chat.',
    ru:
      'Отлично! Теперь все новички смогут отправлять любые сообщения в этот чат.',
    uk:
      'Чудово! Тепер усі новачки зможуть надсилати будь-які повідомлення в чат.',
    br:
      'Boa, Agora todos os novatos poderam mandar qualquer tipo de conteúdo para esse chat.',
    tr:
      'Harika! Artık tüm yeni kullanıcılar, bu sohbete her türlü içeriği gönderebilecek.',
    es:
      '¡Genial! Ahora todos los recién llegados pueden enviar cualquier tipo de contenido a este chat.',
    zh: '很棒！现在所有新手都可以发送任何类型消息到这个群组。',
    no:
      'Supert! Nå kan nykommere sende meldinger med all slags innhold i chatten',
    de: 'Hammer! Neue User können nun jede Art von Nachricht senden.',
    tw: '很棒！現在所有新進成員可以發送任何類型消息到這個群組。',
    fr:
      'Parfait, maintenant tous les nouveaux membres pourront envoyer tout type de contenu à cette discussion',
    id:
      'Baiklah, sekarang semua anggota baru boleh mengirim pesan jenis apa pun di grup ini.',
    ko:
      '좋아요! 이제 모든 신규 입장자들은 이 채팅에 모든 유형의 콘텐츠도 보낼 수 있게 될 것입니다.',
    am: 'አዲስ ገቢዎች የፈለጉትን ነዉ የሚልኩት።',
    cz: 'Skvělé! Nyní mohou do tohoto chatu všichni nováčci posílat cokoli.',
    sk:
      'Skvelé! Odteraz všetci nováčikovia budú môcť do tohto četu posielať akýkoľvek obsah.',
    ar:
      'رائع ! الآن جميع الأعضاء الجدد سوف يكونون قادرين على إرسال أي نوع من المحتوى إلى هذه الدردشة.',
    ja:
      '素晴らしいです！これで、全ての新しく参加した人は、このチャットでどんな種類のコンテンツを送ることができます。',
    ro:
      'Perfect! Acum toți nou veniții vor putea trimite orice fel conținut către acest chat.',
    ca:
      "Entesos, a partir d'ara, tots els nouvinguts podran enviar qualsevol tipus de missatge en aquest grup.",
  },
  deleteEntryMessages_true: {
    en: 'Great! Now entry messages will be deleted.',
    ru: 'Отлично! Теперь сообщения о входе пользователей будут удаляться.',
    uk: 'Чудово! Тепер повідомлення про вхід користувачів буде видалено.',
    br: 'Boa, Agora a mensagem de entrada será apagada.',
    tr: 'Harika! Artık giriş mesajları silinecek.',
    es:
      '¡Genial! Ahora los mensajes que anuncian la entrada de nuevos usuarios, serán borrados.',
    zh: '很棒！现在，加入消息将被删除。',
    no: 'Supert! Meldinger sendt ved ankomst bli slettet.',
    de: 'Mega! Beitrittsnachrichten werden nun gelöscht.',
    tw: '很棒！現在，新成員加入的系統消息將被刪除。',
    fr: `Parfait, maintenant les messages d'arrivée seront supprimés`,
    id: 'Baiklah, sekarang pesan sambutan akan dihapus.',
    ko: '좋아요! 이제 입력 메시지가 삭제됩니다.',
    am: 'ኢንትሪ ሜሴጅ ተደልቷል።',
    cz: 'Skvělé! Nyní budou mazány zprávy o příchodu nováčka.',
    sk: 'Výborne! Odteraz budú správy o vstupe nováčika do četu odstránené.',
    ar: 'رائع ! الآن سيتم حذف رسائل الدخول إلى المجموعة.',
    ja: '素晴らしいです！これで、全ての参加時のメッセージは削除されます。',
    ro: 'Perfect! Acum mesajele de întampinare vor fi șterse.',
    ca:
      "Molt bé, a partir d'ara els missatges, que auncien l'entrada de nous usuaris al grup, seran esborrats.",
  },
  deleteEntryMessages_false: {
    en: 'Great! Now entry messages will not be deleted.',
    ru: 'Отлично! Теперь сообщения о входе пользователей не будут удаляться.',
    uk: 'Чудово! Тепер повідомлення про вхід користувачів не буде видалено.',
    br: 'Boa, Agora a mensagem de entrada não será apagada.',
    tr: 'Harika! Artık giriş mesajları silinmeyecek.',
    es:
      '¡Genial! Ahora los mensajes que anuncian la entrada de nuevos usuarios, no serán borrados.',
    zh: '很棒！现在，加入消息将不被删除。',
    no: 'Supert! Meldinger sendt ved ankomst vil ikke bli slettet.',
    de: 'Spitze! Beitrittsnachrichten werden nicht gelöscht.',
    tw: '很棒！現在，新成員加入的系統消息將不會被刪除。',
    fr: `Parfait, maintenant les messages d'arrivée ne seront pas supprimés`,
    id: 'Baiklah, sekarang pesan sambutan tidak akan dihapus.',
    ko: '좋아요! 이제 입력 메시지는 삭제되지 않습니다.',
    am: 'ኢንትሪ ሜሴጅ አልተደለተም።',
    cz: 'Skvělé! Nyní nebudou mazány zprávy o příchodu nováčka.',
    sk: 'Výborne! Odteraz nebudú správy o vstupe nováčika do četu odstránené.',
    ar: 'رائع ! الآن لن يتم حذف رسائل الدخول إلى المجموعة.',
    ja: '素晴らしいです！これで、全ての参加時のメッセージは削除されません。',
    ro: 'Perfect! Acum mesajele de întampinare nu vor fi șterse.',
    ca:
      "Molt bé, a partir d'ara els missatges, que auncien l'entrada de nous usuaris al grup, no seran esborrats.",
  },
  greetsUsers_true: {
    en:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username).',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, будут получать сообщения с приветствиями. Пожалуйста, ответьте на это сообщение текстом, которым вы хотите встречать новых пользователей (можете использовать $title, $fullname и $username).',
    it:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use.',
    et:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use.',
    uk:
      'Чудово! Тепер щойно новачки розвʼяжуть капчу вони отримають вітання. У відповідь на це повідомлення надішліть текст вітання, яким бажаєте зустрічати майбутніх користувачів (можете використовувати $title, $fullname та $username).',
    br:
      'Boa! Agora os novatos que passarem no teste não serão congratulados. Por favor, responda essa mensagem com a o texto de congratulações que você gostaria de usar.',
    tr:
      'Harika! Artık testi geçen yeni üyeler karşılanacak. Lütfen, bu iletiyi kullanmak istediğiniz tebrik metniyle yanıtlayın ($title ve $username kullanabilirsiniz).',
    es:
      '¡Genial! Ahora los recién llegados que hayan pasado el test serán saludados. Por favor, responde a este mensaje con el texto de saludo que quieres utilizar (puedes usar $title, $fullname y $username).',
    zh:
      '很棒！现在通过测试的新人不会受到欢迎消息。 请回复此消息，并附上您要使用的问候语（您可以使用$title和$username）。',
    no:
      'Supert! Nykommere som har bestått testen vil ikke få en velkomst. Vennligst svar på denne meldingen med teksten du vil bruke som velkomst (du kan bruke $title og $username).',
    de:
      'Turbo! Neue User, die den Test bestanden haben, werden nun begrüßt. Bitte beantworte diese Naxhricht mit einem Begrüßungstext. (Du kannst $title und $username als Platzhalter benutzen).',
    tw:
      '很棒！現在通過驗證的新進成員不會收到歡迎消息。 請回復此消息，並附上您要使用的歡迎詞（您可以使用$title和$username）。',
    fr: `Parfait, maintenant les nouveaux membres ayant réussi le test ne seront plus salués. Veuillez configurer le message d'accueil personnalisé que vous souhaitez en répondant à ce message (Vous pouvez utiliser les fonctions suivantes $title et $username).`,
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian tidak akan menerima pesan sambutan. Silakan balas pesan ini dengan pesan sambutan yg ingin anda gunakan (tersedia $title dan $username).',
    ko:
      '좋아요! 이제 테스트에 통과한 신규 입장자들에게 인사 할 예정입니다. 사용하고 싶은 인사말을 사용하여 이 메시지에 회신하십시오 ($title 및 $username 사용 가능).',
    cz:
      'Skvělé! Nyní budou uvítáni nováčci, kteří prošli testem. Odpovězte prosím na tuto zprávu uvítacím textem, který chcete použít (můžete použít $title a $username).',
    sk:
      'Super! Odteraz budú všetci nováčikovia, ktorí prešli testom, uvítaní. Odpovedzte na túto správu uvítacím textom, ktorý chcete použiť (môžete použiť $title a $username).',
    ar:
      'رائع ! الآن سيتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار. الرجاء الرد على هذه الرسالة مع نص الترحيب الذي ترغب في استخدامه (يمكنك استخدام $title $username).',
    ja:
      '素晴らしいです！これで、テストをパスして新しく参加した人は挨拶をされます。あなたが希望する挨拶のメッセージを、こちらのメッセージに回答してください。($title, $fullname and $usernameを使えます。)',
    ro:
      'Super! Acum nou veniții ce au trecut testul vor fi salutați. Te rog să răspunzi la acest mesaj cu textul salutului pe care vrei sa îl utilizezi (poți folosi $title si $username).',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova rebran un missatge de benvinguda. Per favor, respon a aquest missatge amb el texte que vulguis fer servir per a una salutació personalitzada (pots fer servir $title, $fullname y $username).",
  },
  greetsUsers_true_message: {
    en:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username). The current greeting message follows.',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, будут получать сообщения с приветствиями. Пожалуйста, ответьте на это сообщение текстом, которым вы хотите встречать новых пользователей (можете использовать $title, $fullname и $username). Текущее сообщение с приветствием ниже.',
    it:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use. The current greeting message follows.',
    et:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use. The current greeting message follows.',
    uk:
      'Чудово! Тепер щойно новачки розвʼяжуть капчу вони отримають вітання. У відповідь на це повідомлення надішліть текст вітання, яким бажаєте зустрічати майбутніх користувачів (можете використовувати $title, $fullname та $username). Поточне вітання наведено нижче.',
    br:
      'Boa! Agora os novatos que passarem no teste serão congratulados. Por favor, responda essa mensagem com o texto de congratulações que você gostaria de usar. O texto atual é:',
    tr:
      'Harika! Artık testi geçen yeni üyeler karşılanacak. Lütfen bu mesajı, kullanmak istediğiniz tebrik metni ile yanıtlayın ($title ve $username kullanabilirsiniz). Geçerli tebrik mesajı izlenir.',
    es:
      '¡Genial! Ahora los recién llegados que hayan pasado el test serán saludados. Por favor, responde a este mensaje con el texto de saludo que quieres utilizar (puedes usar $title, $fullname y $username). El mensaje actual de saludo es:',
    zh:
      '很棒！现在通过测试的新人会受到欢迎消息。 请回复此消息，并附上您要使用的问候语（您可以使用$title和$username）。接下来是当前的问候消息。',
    no:
      'Supert! Nykommere som har bestått testen vil få en velkomst. Vennligst svar på denne meldingen med teksten du vil bruke som velkomst (du kan bruke $title og $username).',
    de:
      'Turbo! Neue User, die den Test bestanden haben, werden nun begrüßt. Die aktuelle Begrüßungsnachricht folgt jetzt.',
    tw:
      '很棒！現在通過驗證的新進成員會收到歡迎消息。 請回復此消息，並附上您要使用的歡迎詞（您可以使用$title和$username）。接下來是目前的歡迎詞。',
    fr: `Parfait, maintenant les nouveaux membres qui ont réussi le test seront salués. Veuillez configurer le message d'accueil personnalisé que vous souhaitez en répondant à ce message (Vous pouvez utiliser les fonctions suivantes $title et $username).`,
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian akan menerima pesan sambutan. Silakan balas pesan ini dengan pesan sambutan yg ingin anda gunakan (tersedia $title dan $username). Pesan sambutan yg digunakan saat ini adalah...',
    ko:
      '좋아요! 이제 테스트에 통과한 신규 입장자들에게 인사 할 예정입니다. 사용하고 싶은 인사말을 사용하여 이 메시지에 회신하십시오 ($title 및 $username 사용 가능). 현재 인사 메시지가 이어집니다.',
    am:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username). The current greeting message follows.',
    cz:
      'Skvělé! Nyní budou uvítáni nováčci, kteří prošli testem. Odpovězte prosím na tuto zprávu uvítacím textem, který chcete použít (můžete použít $title a $username). Následuje pozdrav.',
    sk:
      'Super! Odteraz budú všetci nováčikovia, ktorí prešli testom, uvítaní. Odpovedzte na túto správu uvítacím textom, ktorý chcete použiť (môžete použiť $title a $username). Nasleduje aktuálna uvítacia správa.',
    ar:
      'رائع ! الآن سيتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار. الرجاء الرد على هذه الرسالة مع نص الترحيب الذي ترغب في استخدامه (يمكنك استخدام $title $username). فيما يلي رسالة الترحيب الحالية.',
    ja:
      '素晴らしいです！これで、テストをパスして新しく参加した人は挨拶をされます。あなたが希望する挨拶のメッセージを、こちらのメッセージに回答してください。($title, $fullname and $usernameを使えます。) 今の挨拶メッセージは以下です。',
    ro:
      'Super! Acum nou veniții ce au trecut testul vor fi salutați. Te rog să răspunzi la acest mesaj cu textul salutului pe care vrei sa îl utilizezi (poți folosi $title si $username). Mesajul curent de salut este următorul.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova rebran un missatge de benvinguda. Per favor, respon a aquest missatge amb el texte que vulguis fer servir per a una salutació personalitzada (pots fer servir $title, $fullname y $username). Actualment tens establert el següent missatge de benvinguda:",
  },
  greetsUsers_false: {
    en: 'Great! Now newcomers who passed the test will not be greeted.',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, не будут получать сообщения с приветствиями.',
    uk:
      'Чудово! Тепер новачки не будуть отримувати вітання після того, як розвʼяжуть капчу.',
    br: 'Boa! Agora os novatos que passarem no teste não serão congratulados',
    tr: 'Harika! Artık testi geçen yeni üyeler karşılanmayacak.',
    es:
      '¡Genial! Ahora los recién llegados que pasen el test no serán saludados.',
    zh: '很棒！现在通过测试的新人不会受到欢迎消息。',
    no: 'Supert! Nykommere som har bestått testen vil ikke få en velkomst.',
    de:
      'Cool! Neue User, die den Text bestanden haben, werden nun nicht begrüßt.',
    tw: '很棒！現在通過驗證的新進成員不會收到歡迎消息。',
    fr:
      'Parfait, maintenant les nouveaux membres ayant réussi le test ne seront plus salués',
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian tidak menerima sambutan.',
    ko: '좋아요! 이제 테스트에 합격한 신입들에게 환영 인사를 하지않을 거예요.',
    cz: 'Skvělé! Nyní nováčci, kteří projdou testem nebudou uvítáni.',
    sk: 'Super! Odteraz nováčikovia, ktorí prešli testom, nebudú uvítaní.',
    ar: 'تم ! الآن لن يتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار.',
    ja:
      '素晴らしいです！これで、このテストをパスして新しく参加された人は挨拶をされません。',
    ro: 'Super! Acum nou veniții ce au trecut testul vor fi salutați.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova no rebran cap missatge de benvinguda.",
  },
  greetsUsers_message_accepted: {
    en: 'Accepted!',
    ru: 'Принято!',
    uk: 'Прийнято!',
    br: 'Aceito!',
    tr: 'Kabul edildi!',
    es: '¡Aceptado!',
    zh: '已接受！',
    no: 'Akseptert!',
    de: 'Akzeptiert!',
    tw: '已接受！',
    fr: 'Accepté',
    id: 'Diterima!',
    ko: '수락되었습니다',
    am: 'ተቀብለናል',
    cz: 'Přijato!',
    sk: 'Prijaté!',
    ar: 'قبلت!',
    ja: '承認されました！',
    ro: 'Acceptat!',
    ca: 'Acceptat!',
  },
  captchaMessage_true: {
    en:
      'Great! Now newcomers will get custom message explaining the captcha. Please, reply to this message with the captcha text you would like to use (you can use $title, $username, $equation, $fullname and $seconds).',
    ru:
      'Отлично! Теперь пользователи будут получать кастомное сообщение капчи. Пожалуйста, ответьте на это сообщение текстом, который будет объяснять капчу вошедшим (можете использовать $title, $username, $equation, $fullname и $seconds).',
    uk:
      'Чудово! Тепер новачки будуть отримувати інше повідомлення із поясненням капчі. Надішліть новий текст для капчі у відповідь на це повідомлення (можна використовувати $title, $username, $equation, $fullname та $seconds).',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini açıklayan özel mesaj alacaklar. Lütfen bu iletiyi kullanmak istediğiniz CAPTCHA metni ile yanıtlayın ($title, $username, $equation, $fullname ve $seconds kullanabilirsiniz).',
    es:
      '¡Genial! Ahora los recién llegados recibirán una explicación del CAPTCHA que tienen que superar. Por favor, responde a este mensaje con el texto que deseas utilizar para dicha explicación (puedes usar $title, $username, $equation, $fullname y $username).',
    zh:
      '很棒！ 现在新人将获得回答验证码的自定义消息。请用你要使用的验证码文本回复此消息 (你可以使用 $title, $username, $equation, $fullname 和 $seconds)。',
    de:
      'WOW! Neue User erhalten nun eine individuelle Nachricht, die Ihnen das Captcha erklärt. Bitte antworte auf diese Nachricht mit dem Captcha Text, den du verwenden möchtest. (Du kannst die Platzhalter $title, $username, $equation, $fullname und $seconds verwenden).',
    sk:
      'Skvelé! Odteraz nováčikovia obdržia vlastnú správu vysvetľujúcu test captcha. Odpovedzte na túto správu textom testu captcha, ktorý chcete použiť (môžete použiť $title, $username, $equation, $fullname a $seconds).',
    ar:
      'رائع الآن الأعضاء الجدد سيتلقون رسالة تشرح لهم طريقة اجراء الإختبار, قم بالرد مع رسالة الاختبار التي تريدها. يمكنك إستخدام  $title, $username, $equation, $fullname and $seconds).',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャに説明されたカスタムメッセージを受けます。あなたが希望するキャプチャテキストを、こちらのメッセージに回答してください。($title, $username, $equation, $fullname and $secondsを使えます)。',
    ro:
      'Super! Acum nou veniții vor primi un mesaj personalizat ce le explică captcha. Te rog răspunde la acest mesaj cu text-ul testului captcha pe care vrei sa îl folosești (poți utiliza $title, $username, $equation, $fullname și $seconds).',
    ca:
      "D'acord, a partir d'ara els nouvinguts rebran un missatge que els explicarà la prova que han de superar. Per favor, respon a aquest missatge amb el texte personalitzat que vulguis fer servir per a l'explicació de la prova (pots fer servir $title, $username, $equation, $fullname i $seconds).",
  },
  captchaMessage_true_message: {
    en:
      'Great! Now newcomers will get custom message explaining the captcha. Please, reply to this message with the captcha text you would like to use (you can use $title, $username, $equation, $fullname and $seconds). The current greeting message follows.',
    ru:
      'Отлично! Теперь пользователи будут получать кастомное сообщение капчи. Пожалуйста, ответьте на это сообщение текстом, который будет объяснять капчу вошедшим (можете использовать $title, $username, $equation, $fullname и $seconds). Текущее сообщение с приветствием ниже.',
    uk:
      'Чудово! Тепер новачки будуть отримувати інше повідомлення із поясненням капчі. Надішліть новий текст для капчі у відповідь на це повідомлення (можна використовувати $title, $username, $equation, $fullname та $seconds). Поточне пояснення наведено нижче.',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini açıklayan özel mesaj alacaklar. Lütfen bu iletiyi kullanmak istediğiniz CAPTCHA metni ile yanıtlayın ($title, $username, $equation, $fullname ve $seconds kullanabilirsiniz). Geçerli karşılama mesajı izlenir.',
    es:
      '¡Genial! Ahora los recién llegados recibirán una explicación del CAPTCHA que tienen que superar. Por favor, responde a este mensaje con el texto que deseas utilizar para dicha explicación (puedes usar $title, $username, $equation, $fullname y $username). El mensaje explicativo actual es:',
    zh:
      '很棒！ 现在新人将获得回答验证码的自定义消息。请用你要使用的验证码文本回复此消息 (你可以使用 $title, $username, $equation, $fullname 和 $seconds)。 当前的问候消息如下。',
    de:
      'WOW! Neue User erhalten nun eine individuelle Nachricht, die Ihnen das Captcha erklärt. Bitte antworte auf diese Nachricht mit dem Captcha Text, den du verwenden möchtest. (Du kannst die Platzhalter $title, $username, $equation, $fullname und $seconds verwenden). Die aktuelle Begrüßungsnachricht folgt.',
    sk:
      'Skvelé! Odteraz nováčikovia obdržia vlastnú správu vysvetľujúcu test captcha. Odpovedzte na túto správu textom testu captcha, ktorý chcete použiť (môžete použiť $title, $username, $equation, $fullname a $seconds). Nasleduje aktuálna uvítacia správa.',
    ar:
      'رائع الآن الأعضاء الجدد سيتلقون رسالة تشرح لهم طريقة اجراء الإختبار, قم بالرد مع رسالة الاختبار التي تريدها. يمكنك إستخدام $title, $username, $equation, $fullname and $seconds). The current greeting message follows.',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャに説明されたカスタムメッセージを受けます。あなたが希望するキャプチャテキストを、こちらのメッセージに回答してください。($title, $username, $equation, $fullname and $secondsを使えます)。 今の挨拶メッセージは以下です。',
    ro:
      'Super! Acum nou veniții vor primi un mesaj personalizat ce le explică captcha. Te rog răspunde la acest mesaj cu text-ul testului captcha pe care vrei sa îl folosești (poți utiliza $title, $username, $equation, $fullname și $seconds). Mesajul curent de salut este următorul.',
    ca:
      "D'acord, a partir d'ara els nouvinguts rebran un missatge que els explicarà la prova que han de superar. Per favor, respon a aquest missatge amb el texte personalitzat que vulguis fer servir per a l'explicació de la prova (pots fer servir $title, $username, $equation, $fullname i $seconds). Actualment tens establert el següent missatge explicatiu:",
  },
  captchaMessage_false: {
    en: 'Great! Now newcomers will see the default captcha message',
    ru:
      'Отлично! Теперь пользователи будут получать стандартное сообщение с капчей.',
    uk: 'Чудово! Тепер новачки будуть бачити типове повдомлення капчі',
    tr: 'Harika! Artık yeni gelenler varsayılan CAPTCHA mesajını görecek',
    es:
      '¡Genial! Ahora los recién llegados recibirán el mensaje predeteminado de la explicación del CAPTCHA que tienen que superar.',
    zh: '很棒！现在新人将会看到默认的验证码消息',
    de: 'Großartig! Jetzt erhalten neue User die standard Captcha Nachricht',
    sk:
      'Skvelé! Odteraz nováčikovia budú vidieť predvolenú správu testu captcha',
    ar: 'رائع, يمكن للأعضاء الجدد الآن رؤية رسالة الإختبار الإفتراضية',
    ja:
      '素晴らしいです！これで、新しく参加した人は、デフォルトのキャプチャメッセージを見れます。',
    ro: 'Minunat! Acum nou veniții vor vedea mesajul captcha implicit',
    ca:
      "Molt bé, a partir d'ara els nouvinguts rebran el missatge per defecte, que els explicarà la prova que han de superar.",
  },
  trust_success: {
    en: 'Accepted!',
    ru: 'Принято!',
    uk: 'Прийнято!',
    br: 'Aceito!',
    tr: 'Kabul edildi!',
    es: '¡Aceptado!',
    zh: '已接受！',
    no: 'Akseptert!',
    de: 'Akzeptiert!',
    tw: '已接受！',
    fr: 'Accepté',
    id: 'Diterima!',
    ko: '수락되었습니다',
    am: 'ተቀብለናል',
    cz: 'Přijato!',
    sk: 'Prijaté!',
    ar: 'قبلت!',
    ja: '承認されました！',
    ro: 'Acceptat!',
    ca: 'Acceptat!',
  },
  banUsers_true: {
    en: 'Nice! Users will be banned if they do not pass captcha.',
    ru: 'Отлично! Пользователи будут баниться, если не пройдут капчу.',
    uk:
      'Добре! Тепер користувачі будуть забанені, якщо вони не пройдуть капчу.',
    tr: 'Güzel! Kullanıcılar, CAPTCHA testini geçemezlerse yasaklanırlar',
    es:
      'Muy bién, a partir de ahora los usuarios que no superen el CAPTCHA quedarán bloqueados.',
    zh: '很好！如果用户未通过验证码，将被禁止。',
    de: 'Toll! User werden gebannt, wenn sie den Captcha Test nicht schaffen.',
    cz: 'Skvěle! Nováčci, kteří neprojdou testem budou zabanováni.',
    sk: 'Fajn! Používatelia, ktorí neprejdú testom, budú zabanovaní.',
    ar: 'تم, الأعضاء الذين لم يجتازوا الإختبار سيتم حظرهم.',
    ja: 'いいですね！キャプチャをパスしなかったユーザーがバンされます。',
    ro: 'Nice! Utilizatorii vor fi banați dacă nu trec testul captcha.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que no superin la prova quedaran bloquejats.",
  },
  banUsers_false: {
    en: 'Nice! Users will be kicked if they do not pass captcha.',
    ru: 'Отлично! Пользователи будут кикнуты, если не пройдут капчу.',
    uk: 'Добре! Тепер користувачей буде вилучено, якщо вони не пройдуть капчу.',
    tr: 'Güzel! Kullanıcılar, CAPTCHA testini geçemezlerse kovulurlar',
    es:
      'Muy bién, a partir de ahora los usuarios que no superen el CAPTCHA serán expulsados.',
    zh: '很好！如果用户未通过验证码，将被踢出。',
    de:
      'Spitze! User werden gekickt, wenn sie den Captcha Test nicht schaffen.',
    cz: 'Skvěle! Nováčci, kteří neprojdou testem budou vyhozeni.',
    sk: 'Fajn! Používatelia, ktorí neprejdú testom, budú vyhodení.',
    ar: 'تم, الأعضاء الذين لم يجتازوا الإختبار سيتم طردهم.',
    ja: 'いいですね！キャプチャをパスしなかったユーザーは退出させられます。',
    ro: 'Nice! Utilizatorii vor primi kick dacă nu trec testul captcha.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que no superin la prova seran explusats.",
  },
  deleteEntryOnKick_true: {
    en:
      'Great! Shieldy will remove entry messages of the users who failed captcha.',
    ru:
      'Щилди будет удалять сообщения о входе пользователей, проваливших капчу.',
    uk:
      'Чудово! Шилді тепер видалятиме усі вхідні повідомлення від користувачів, які провалили капчу.',
    tr:
      'Harika! Shieldy, CAPTCHA testinden başarısız olan kullanıcıların giriş mesajlarını kaldıracak.',
    es:
      'Perfecto, Shieldy eliminará los mensajes de los recién llegados que no hayan superado el CAPTCHA.',
    zh: '很棒！Shieldy将删除验证码失败用户的加入消息。',
    de:
      'Top! Shieldy wird nun die Beitrittsnachrichten entfernen, wenn ein User den Captcha Test nicht besteht.',
    sk:
      'Super! Shieldy odstráni správy o vstupe nováčikov do četu, ak neprejdú testom captcha.',
    ja:
      '素晴らしいです！Shieldyは、キャプチャを失敗したユーザーの入室時のメッセージを削除します。',
    ro:
      'Minunat! Shieldy va șterge fiecare mesaj al utilizatorilor ce nu au trecut testul captcha.',
    ca:
      "Entesos, a partir d'ara en Shieldy esborrarà tots els missatges dels nouvinguts que no hagin superat la prova.",
  },
  deleteEntryOnKick_false: {
    en:
      'Great! Shieldy will not remove entry messages of the users who failed captcha.',
    ru:
      'Великолепно! Щилди не будет удалять сообщения о входе пользователей, проваливших капчу.',
    uk:
      'Чудово. Шилді не буде видаляти вхідні повідомлення від користувачів, які провалили капчу.',
    tr:
      'Harika! Shieldy, CAPTCHA testinden başarısız olan kullanıcıların giriş mesajlarını kaldırmayacak.',
    es:
      'Perfecto, Shieldy no eliminará los mensajes de los recién llegados que no hayan superado el CAPTCHA.',
    zh: '很棒！Shieldy将不会删除验证码失败用户的加入消息。',
    de:
      'Hammer! Shieldy wird nun die Beitrittsnachrichten nicht entfernen, wenn ein User den Captcha Test nicht besteht.',
    sk:
      'Super! Shieldy neodstráni správy o vstupe nováčikov do četu, ak neprejdú testom captcha.',
    ja:
      '素晴らしいです！Shieldyは、キャプチャを失敗したユーザーの入室時のメッセージを削除しません。',
    ro:
      'Minunat! Shieldy nu va șterge fiecare mesaj al utilizatorilor ce nu au trecut testul captcha.',
    ca:
      "Entesos, a partir d'ara en Shieldy no esborrarà tots els missatges dels nouvinguts que no hagin superat la prova.",
  },
  cas_true: {
    en: 'Great! Shieldy will now use Combot Anti-Spam.',
    ru: 'Великолепно! Щилди теперь будет использовать Combot Anti-Spam.',
    uk: 'Чудово! Шилді тепер використовує Combot Anti-Spam.',
    tr: 'Harika! Shieldy, artık Combot Anti-Spam kullanacak.',
    es:
      '¡Entendido! Ahora Shieldy utilizará Combot Anti-Spam para combatir el spam.',
    sk: 'Skvelé! Shieldy odteraz bude používať Combot Anti-Spam.',
    ca:
      "Molt bé, a partir d'ara en Shieldy ferà servir Combot Anti-Spam per a combatre els missatges brossa.",
  },
  cas_false: {
    en: 'Great! Shieldy will not use Combot Anti-Spam now.',
    ru: 'Великолепно! Щилди теперь не будет использовать Combot Anti-Spam.',
    uk: 'Чудово! Шилді тепер не використовує Combot Anti-Spam.',
    tr: 'Harika! Shieldy, artık Combot Anti-Spam kullanmayacak.',
    es:
      '¡Entendido! Ahora Shieldy no utilizará Combot Anti-Spam para combatir el spam.',
    sk: 'Skvelé! Shieldy odteraz nebude používať Combot Anti-Spam.',
    ca:
      "Molt bé, a partir d'ara en Shieldy no ferà servir Combot Anti-Spam per a combatre els missatges brossa.",
  },
  underAttack_true: {
    en:
      "Great! Shieldy will now kick everybody who enters this chat. Don't forget to turn this mode off when attack is over with /underAttack.",
    ru:
      'Отлично! Щилди теперь будет кикать всех, кто заходит в этот чат. Не забудьте отключить этот режим после окончания атаки при помощи команды /underAttack.',
    uk:
      'Чудово! Шилді тепер видалятиме усіх, хто спробує увійти до чату. Коли атака скінчиться, не забудьте вимкнути цей режим командою /underAttack.',
    es:
      '¡Entendido! Ahora Shieldy expulsará a todo aquel que entre en este chat. No olvides desactivar este modo cuando el ataque haya cesado, para ello utiliza el comando /underAttack.',
    ca:
      "Molt bé, a partir d'ara en Shieldy expulsarà a tothom que vulgui entrar en aquest xat. Procura desactivar aquest mode quan l'atac s'hagi esveït; per això fes servir la comanda /underAttack.",
  },
  underAttack_false: {
    en: 'Great! Shieldy will not kick everybody who enters this chat.',
    ru: 'Отлично! Щилди теперь не будет кикать всех, кто заходит в этот чат.',
    uk:
      'Чудово! Шилді тепер не буде видаляти усіх, хто спробує увійти до чату.',
    es:
      '¡Entendido! Ahora Shieldy ya no continuará expulsando a nadie que entre en este chat.',
    ca:
      "Molt bé, a partir d'ara en Shieldy ja no continuarà expulsant a ningú que vulgui entrar en aquest xat",
  },
  noAttack_true: {
    en:
      "Great! Shieldy is disabled now. Don't forget to turn this mode off with /noAttack.",
    ru:
      'Отлично! Теперь Щилди отключен. Не забудьте включить его назад командой /noAttack.',
    es:
      '¡Entendido! Ahora Shieldy está desactivado. No olvides desactivar este modo usando /noAttack.',
    ca:
      "Molt bé, a partir d'ara en Shieldy està desactivat i ja no vigilarà aquest xat. Per desactivar aquest mode fes servir la comanda /noAttack.",
  },
  noAttack_false: {
    en: 'Great! Shieldy is now on.',
    ru: 'Отлично! Щилди включен.',
    es: '¡Entendido! Ahora Shieldy está activo.',
    ca: "Molt bé, a partir d'ara en Shieldy està actiu i vigilant aquest xat.",
  },
  noChannelLinks_true: {
    en:
      'Great! Shieldy will now delete messages that link to telegram channels.',
    ru:
      'Отлично! Щилди теперь будет удалять сообщения с ссылками на Телеграм-каналы.',
    es:
      '¡Genial! Ahora Shieldy eliminará todos los mensajes que contengan enlaces a otros canales de Telegram.',
    ca:
      "D'acord, a partir d'ara en Shieldy esborrarà tots el missatges que contenguin enllaços a altres canals de Telegram.",
  },
  noChannelLinks_false: {
    en:
      'Great! Shieldy will not delete messages that link to telegram channels.',
    ru:
      'Отлично! Щилди теперь не будет удалять сообщения с ссылками на Телеграм-каналы.',
    es:
      '¡Genial! Ahora Shieldy no eliminará ningún mensaje que contenga enlaces a otros canales de Telegram.',
    ca:
      "D'acord, a partir d'ara en Shieldy ja no esborrarà cap missatge que contengui enllaços a altres canals de Telegram.",
  },
  viewConfig: {
    en: 'Current config:',
    ru: 'Текущие настройки:',
    es: 'Esta es la configuración actual:',
    ca: 'Aquesta és la configuració actual:',
  },
  allowInvitingBots_true: {
    en: 'Nice! Users can invite bots now.',
    ru: 'Отлично! Пользователи теперь могут приглашать ботов.',
    es: '¡Muy bién! Ahora los usuarios pueden invitar a bots.',
    ca:
      "Fantàstic! A partir d'ara els usuaris poden convidar robots a la conversa.",
  },
  allowInvitingBots_false: {
    en: 'Nice! Users cannot invite bots now.',
    ru: 'Отлично! Пользователи теперь не могут приглашать ботов.',
    es: '¡Muy bién! Ahora los usuarios no podrán invitar a bots.',
    ca:
      "Fantàstic! A partir d'ara els usuaris ja no poden convidar robots a la conversa.",
  },
  greetingButtons: {
    en: `Reply to this message (and I mean reply(!), not just send a separate message) with up to 10 links in format below to setup greeting buttons. Reply with anything else to remove all buttons.

DuckDuckGo - https://duckduckgo.com
Wikipedia - https://wikipedia.com

Current buttons:`,
    ru: `Ответьте на это сообщение (и я имею ввиду ответьте(!), а не просто отправьте отдельное сообщение) с не более чем 10 ссылками в формате ниже, чтобы установить кнопки приветствию. Ответьте любым другим сообщением, чтобы удалить все кнопки.

DuckDuckGo - https://duckduckgo.com
Wikipedia - https://wikipedia.com

Текущие кнопки:`,
    es: `Responde a este mensaje (si, si, responde!, no escribas un mensaje a parte) con hasta 10 enlaces, con el formato que ves más abajo, para configurar los botones de bienvenida. Responde cualquier otra cosa para eliminar todos los botones.

DuckDuckGo - https://duckduckgo.com
Wikipedia - https://wikipedia.com

Botones configurados actualmente:`,
    ca: `Respon a aquest missatge (si, ha de ser una resposta, no em serveix de res que m'escriguis un missatge a part), amb un llistat de fins a 10 enllaços, de l'estil que veus més abaix, per a configurar els botons de benvinguda. Respon qualsevol altra cosa per a suprimir tots els botons de cop.

DuckDuckGo - https://duckduckgo.com
Wikipedia - https://wikipedia.com

Aquests són els botons que tens configurats actualment:`,
  },
  greetingButtonsEmpty: {
    en: 'No buttons',
    ru: 'Нет кнопок',
    es: 'No hay botones',
    ca: 'No hi ha botons',
  },
}
