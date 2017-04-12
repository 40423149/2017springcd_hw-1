var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系-協同產品設計實習課程 40423245學員 個人課程倉儲: https://github.com/40423245/2017springcd_hw 個人課程投影片: https://40423245.github.io/2017springcd_hw/ 個人課程網誌: https://40423245.github.io/2017springcd_hw/blog/","url":"./pages/about/","tags":"misc"},{"title":"2017/04/19 W9","text":"期中報告 第一週連結 一. 可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱， 二. 了解如何使用stunnel 第二週連結 一. 利用python找出缺課人員 二. 在solvespace組立四連桿，並放置到Vrep裡。 第三週連結 1. 建置fossil 2. 請完成 Solvespace 30-50-60 cm 比例的四連桿組立, 並轉出 stl 檔案, 以 import 方式轉入 V-rep 3. 請利用 Onshape 完成上述相同尺寸之四連桿機構, 以 stl 轉出 (或其他格式) 後, 再轉入 V-rep 4. 請在 50 連桿上加上 50-50-50 正三角形, 以 Solvespace 輸入該三角形頂點運動軌跡 5. 請設法驗證上述四連桿運動軌跡, 是否正確, 並設法在分組網頁中執行該四連桿機構的運動模擬 第四週連結 1. Fossil新增組員以及組員權限設定 2. 在Onshape繪製單連桿機構並轉出stl檔案 3. 在solvespace繪製單連桿機構並轉出stl檔案 第五週連結 1. 如何在fossil筆記倉儲主頁顯示作業 2. 將單連桿轉入V-rep並使其作動 第六週連結 1. 利用Onshape裡的變數指令來繪製四連桿，並匯入V-rep裝上馬達。 第七週連結 1. 利用fossil對倉儲進行管理練習 2. 利用Onshape繪製八連桿 3. 將八連桿匯入V-rep並使其作動 總結： 這學期導入了fossil來跟git 一起管理倉儲，這樣在以後假如git沒支援了，還可以用fossil；這學期也加入了V-rep，可以結合上學期的Onshape以及solvespace，繪製機構以及模擬，練習的範例有單連桿、四連桿及八連桿。 心得及自評 每一週都有跟上進度，也都有進行練習以及拍影片，但在於組員的協同上還需要改進，自評75分。 影片 第一週 W1 第二週 python找出缺課人員 Solvespace四連桿組立 Onshape四連桿 任務四、任務五 第三週 建置Fossil SCM Fossil權限設定 Onshape單連桿 solvespace單連桿 Vrep單連桿 第四週 Fossil新增組員 Onshape單連桿機構 solvespace單連桿機構 回家練習 第五週 W5上課練習 W5回家練習 第六週 W6上課練習 第七週 fossil倉儲管理 Onshape八連桿 八連桿V-rep","url":"./2017spring-cd-W9.html","tags":"Course"},{"title":"2017/04/05 W7","text":"2017Spring 協同產品設計實習課程 第七週 上課筆記 1. 利用fossil對倉儲進行管理練習 2. 利用Onshape繪製八連桿 3. 將八連桿匯入V-rep並使其作動 練習 1. 利用fossil對倉儲進行管理練習 利用以下指令對fossil倉儲進行管理 fossil clone uri foo.fossil (將遠端的倉儲下載下來) fossil open ./../../foo.fossil (將下載下來的倉儲打開) fossil add . (將改版的倉儲推至暫存區) fossil remote-url off (將自動推送改為手動，這是與git不同之處，fossil會自動推送) fossil push https://user@192.168.X.XX (將暫存區的檔案推至遠端) 2. 利用Onshape繪製八連桿 與四連桿相同利用參數指令繪製零件，並利用轉動指令及緊固指令將八連桿組立起來 零件連結 ： Onshape八連桿機構 3. 將八連桿匯入V-rep並使其作動 與四連桿相同，只不過這次加入了更多的Dummy，因此在其從屬關係上須特別小心。 心得 這禮拜加入更多的Dummy，以及在桿子上的從屬關係更加的複雜，讓我在練習上有些手無足措，也花了滿久的時間，這禮拜還加入了fossil的倉儲管理，fossil對我來說還相當新鮮，需要盡快地了解其架構。 影片 1. 利用fossil對倉儲進行管理練習 40423245機械設計工程系 - 協同產品設計實習課程W7-利用fossil對倉儲進行管理練習 from 40423245 on Vimeo . 2. 利用Onshape繪製八連桿 40423245機械設計工程系 - 協同產品設計實習課程W7-利用Onshape繪製八連桿 from 40423245 on Vimeo . 3. 將八連桿匯入V-rep並使其作動 40423245機械設計工程系 - 協同產品設計實習課程-W7-將八連桿匯入V-rep並使其作動 from 40423245 on Vimeo .","url":"./2017spring-cd-W7.html","tags":"Course"},{"title":"2017/03/29 W6","text":"2017Spring 協同產品設計實習課程 第六週 上課筆記 1. 利用Onshape裡的變數指令來繪製四連桿，並匯入V-rep裝上馬達。 練習 在Onshape裡建立一個新文件，並設定好參數設定 接著繪製草圖，在標註尺寸時利用#+參數名稱加入設定好的參數，並將其擠出為零件 接著在組合件裡匯入零件，並利用 指令組立桿子，利用 指令組立軸 零件連結 ： Onshape四連桿機構 接著將組立好的四連桿轉出stl，並匯入V-rep，將各個零件分開，加入旋轉軸，加入馬達，將桿子設為動態物件後，設好從屬關係。 接著新增兩個Dummy 並設定兩個Dummy的關係Dynamics 心得 這禮拜加入了Dummy的工具，還不太熟悉需要好好的研究一下。 練習影片 40423245機械設計工程系 - 協同產品設計實習課程-W6上課練習 from 40423245 on Vimeo .","url":"./2017spring-cd-W6.html","tags":"Course"},{"title":"2017/03/22 W5","text":"2017Spring 協同產品設計實習課程 第五週 上課筆記 1. 如何在fossil筆記倉儲主頁顯示作業 2. 將單連桿轉入V-rep並使其作動 練習 1. 如何在fossil筆記倉儲主頁顯示作業 只要在wiki裡新增一個與倉儲筆記同名稱的檔案，即可在fossil筆記倉儲主頁顯示作業 在建立wiki有三種格式可選擇，wiki、Markdown及html，安全性以wiki最高，Markdown其次，html最低 2. 將單連桿轉入V-rep並使其作動 先將在繪圖軟體繪製好的單連桿利用Import/Mesh匯入V-rep 接著利用Divide selected shapes將單連桿的零件分開 利用Add/Joint/Revolute新增一個旋轉軸 將旋轉軸的位置跟繪製的軸合併再一起 設置好各零件的從屬關係 接著設定旋轉軸的角速度，並固定單連桿 接著將桿子設為動態物件 練習心得 發現V-rep是個非常強大的軟體，可以模擬真實的情況，單連桿是較為簡單的練習，因此很快就了解了狀況。 練習影片 40423245機械設計工程系 - 協同產品設計實習課程-W5上課練習 from 40423245 on Vimeo . 回家練習 跟單連桿一樣先將檔案轉入V-rep，接著將零件分開，之後加入一個旋轉軸，將旋轉軸的位置跟繪製的軸合併再一起 四個旋轉軸都設定好了之後，設定好各零件的從屬關係 加入兩個Dummy，一個放置在最後一個旋轉軸，另一個放置在第一桿子下 設定好兩者的關係 回家練習心得 四連桿相較於單連趕多了個Dummy，在它的使用上花費了不少時間。 回家練習影片 40423245機械設計工程系 - 協同產品設計實習課程-W5回家練習 from 40423245 on Vimeo .","url":"./2017spring-cd-W5.html","tags":"Course"},{"title":"2017/03/15 W4","text":"2017Spring 協同產品設計實習課程 第四週 上課筆記 1. Fossil新增組員以及組員權限設定 2. 在Onshape繪製單連桿機構並轉出stl檔案 3. 在solvespace繪製單連桿機構並轉出stl檔案 練習 1. Fossil新增組員以及組員權限設定 fossil開啟後 ，到admin/user/add裡可新增筆記倉儲裡的成員 2. 在Onshape繪製單連桿機構並轉出stl檔案 繪製出所需零件 ，底座、軸及單連桿，並將其組立起來 Onshape單連桿機構 3. 在solvespace繪製單連桿機構並轉出stl檔案 繪製出所需零件 ，底座、軸及單連桿，並將其組立起來 練習心得 這禮拜所繪製的單連桿零件還蠻簡單的。 練習影片 1. Fossil新增組員以及組員權限設定 Fossil新增組員 2. 在Onshape繪製單連桿機構並轉出stl檔案 Onshape單連桿機構 3. 在solvespace繪製單連桿機構並轉出stl檔案 solvespace單連桿機構 4. 回家練習 回家練習","url":"./2017spring-cd-W4.html","tags":"Course"},{"title":"2017/03/08 W3","text":"2017Spring 協同產品設計實習課程 第三週 第三週上課內容 從 https://mde2al.kmol.info 進入wiki檢視每周進度，並介紹了hyperworks這套軟體，包括檢測受力.受熱.流力.最小化資源利用‧‧‧，還給我們十則影片翻譯，以便了解hyperworks以及增進英文能力。 1. 建置fossil，在cmd裡進入Y\\tmp\\fossil_repo的資料夾，輸入fossil init foo .fossil的指令( foo 的位置可輸入組別名稱)，第三行有帳戶名稱與密碼需特別注意。 可至admin/user裡更改帳戶名稱及密碼 可至admin/configuration裡更改標題 第三週任務 1. 請至課程網頁中 w3 Hyperworks 處瀏覽 10 個影片, 請每組選兩個影片, 設法寫出該影片的英文逐字稿, 目的是希望能夠最佳化行走機構的零件 Hyperworks1 Hyperworks2 Hyperworks3 Hyperworks4 Hyperworks 14-1 Hyperworks 14-2 Hyperworks 14-3 Hyperworks 14-4 Hyperworks 14-5 Hyperworks 14-6 2. 請完成 Solvespace 30-50-60 cm 比例的四連桿組立, 並轉出 stl 檔案, 以 import 方式轉入 V-rep 先在solvespace裡繪製出四連桿結構 再將桿子組立起來(利用點與點的重合、線的共線及點與面的重合，限制桿子的作動。) 最後將四連桿儲存成stl檔`並用Vrep裡的import裡的Mash開啟(開啟時四連桿會重疊到地面，可用object/item shift調整Z軸高度) 3. 請利用 Onshape 完成上述相同尺寸之四連桿機構, 以 stl 轉出 (或其他格式) 後, 再轉入 V-rep 先在Onshape中繪製出四連桿 Onshape四連桿機構 接著將四連桿匯出，分別有PARASOLID，ACIS ，STEP，IGES，COLLADA，STL的檔案格式 接著在Vrep裡用import裡的Mesh將檔案匯入，發現只能匯入stl檔案 4. 請在 50 連桿上加上 50-50-50 正三角形, 以 Solvespace 輸入該三角形頂點運動軌跡 先利用solvespace在 50 連桿上加上 50-50-50 正三角形，並利用Analyze裡的Trace point繪製出頂點的運動軌跡。 5. 請設法驗證上述四連桿運動軌跡, 是否正確, 並設法在分組網頁中執行該四連桿機構的運動模擬 接著可利用Stop point 將路徑匯出成csv檔，接著可利用Excel裡的圖表繪製功能驗證軌跡是否相同。 最後利用課程網誌裡 協同產品設計實習第1週任務 的程式碼去驗證solvespace裡所繪製的運動軌跡。 結果 : cx= -65.20944533000791 cy= 29.544232590366242 dx= -22.53868820588739 dy= 55.60582284219696 ex= -66.44406598905394 ey= 79.52898738448577 心得 這學期的倉儲的wiki要在不同的地方編輯，還需要時間來適應，還有在做任務一時，明顯的發現到自己英文能力的不足，希望能盡快的補足這方面的能力 任務二影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務二完成 Solvespace 30-50-60 cm 比例的四連桿組立 from 40423245 on Vimeo . 任務三影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務三利用 Onshape 完成四連桿機構, 以 stl 轉出後, 再轉入 V-rep from 40423245 on Vimeo . 任務四、五影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務四、任務五 from 40423245 on Vimeo .","url":"./2017spring-cd-W3.html","tags":"Course"},{"title":"2017/03/01 W2","text":"2017Spring 協同產品設計實習課程 第二週 一. 利用python找出缺課人員 可至班級倉儲data下載W2資料夾裡的cd_w2.py(有填寫座位表的人)和w2b_registered.txt(有修課的人)，接著利用利用程式碼列印出分組名單、座位列表、缺席學生和學生總數。 分組座位程式碼 #import os #讀取w2b_cadlab.txt的檔案將其儲存為adata，並設定encoding為utf-8 adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_registered.txt的檔案將其儲存為rdata，並一行一行隔開，並設定encoding為utf-8 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #列印出adata，以便檢查結果 #print(adata) #利用splitlines將adata一行一行隔開並其儲存為alist alist = adata.splitlines() #列印出alist[2]，以便檢查結果 #print(alist[2]) #將變數n儲存為0 n = 0 #將列從0開始算起 row = 0 #將final_list儲存為一個空的數列 final_list = [] #將w2_list儲存為一個空的數列 w2_list = [] #執行一個for迴圈從第二列開始 for stud_num in alist[2:]: #每執行完一次迴圈列數+1 row = row + 1 #執行完迴圈後用\\將其隔開並儲存為blist blist = stud_num.split(\"\\t\") #列印出blist，以便檢查結果 #print(blist) #將行從0開始算起 column = 0 #執行一個for迴圈去取得blist裡的數列 for i in range(len(blist)): #每執行完一次迴圈行數+1 column = column + 1 #假如blist數列裡不是空白 if blist[i] != \"\": #列印出blist[i]，以便檢查結果 #print(blist[i]) #將組序有用_隔開的儲存為clist clist = blist[i].split(\"_\") #將組序+_+學號+_+列+行的資料儲存為stud_data stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) #將stud_data結果附加在final_list的資料裡 final_list.append(stud_data) #將clist[1]結果附加在w2_list的資料裡 w2_list.append(clist[1]) #每執行完一次迴圈n+1 n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) #列印出分組名單 print(\"分組名單:\") #執行一個for迴圈去取得group_list裡的數列 for i in range(len(group_list)): #列印出 group_list[i]的資料 print(group_list[i]) #列印出座位列表 print(\"座位列表:\") #執行一個for迴圈去取得final_list裡的數列 for i in range(len(final_list)): #列印出 final_list[i]的資料 print(final_list[i]) #執行一個for迴圈去取得rdata裡的數列 for i in range(len(rdata)): #假如有在rdata裡但沒有在w2_list裡，目的在找出缺席學生 if rdata[i] not in w2_list: #列印出 rdata[i]的資料，缺席學生 print(\"缺席學生:\", rdata[i]) #列印出學生總數n個 print(\"學生總數:\", n) #print(os.environ) 二. 在solvespace組立四連桿，並放置到Vrep裡。 先在solvespace裡繪製出四連桿結構 再將桿子組立起來(利用點與點的重合、線的共線及點與面的重合，限制桿子的作動。) 最後將四連桿儲存成stl檔`並用Vrep裡的import裡的Mash開啟(開啟時四連桿會重疊到地面，可用object/item shift調整Z軸高度) 第二週心得 這禮拜理解到了程式碼的方便之處，體驗到了利用程式碼去處理繁雜的資料，r接著開始了解如何使用Vrep，以利之後要設計的八隻腳。 第二週心得影片 40423245機械設計工程系 - 協同產品設計實習課程-W2 from 40423245 on Vimeo .","url":"./2017spring-cd-W2.html","tags":"Course"},{"title":"2017/02/22 W1","text":"2017Spring 協同產品設計實習課程 第一週 一.可至 可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱 二.了解如何使用stunnel 三.利用python程式碼控制Vrep裡的單連桿作動 上課筆記 一. 可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱，老師介紹了Blender 3dstudio maya的相關性，簡略說明c語言與python的優劣與使用時機。 二. 了解如何使用stunnel ，並且嘗試以anonymous（無名氏/遊客）的身份進入https://192.168.1.24/2017springvcp_hw/index。 在按下start之後，會出現錯誤的圖案 (1) ，這是因為stunnel資料夾裡的config/styunnel.conf裡的ip與電腦的ip不同(styunnel.conf裡的分號代表註解)，可至cmd打ipconfig/all的指令，找到電腦的ip位置並將其複製、貼到styunnel.conf裡 (2) ，(443為https的Port號不須修改)，如果有設置proxy就必須要到設定proxy的地方按進階，將電腦ip設為額外ip，這樣就可至google打網址，並且嘗試以anonymous（無名氏/遊客）的身份進入https://192.168.1.24/2017springvcp_hw/index。 (1) (2) 三. 利用python程式碼控制Vrep裡的單連桿作動。 可至 課程倉儲 的data裡下載fourbar_eightbar_solvespace_vrep.7z以及onelink_vrep_remoteapi_pos_vel.7z兩個檔案，解壓縮後會有三個檔案，分別是單連桿、四連桿及八連桿，可試著在solvespace及Vrep裡開啟。 在Vrep裡開啟one_link_robot_remoteAPI.ttt的檔案(ttt是Vrep檔案的副檔名)，在SciTE裡開啟one_link_robot_remoteAPI_joint_target_vel.py的檔案，按下Tool裡的Go即可開始控制單連桿，按Enter會旋轉，按P會暫停。 第一週心得 在經過上學期得學習，發現這學期的課程變得有點難，在每個禮拜最後一堂課還要上台分享，期望能迅速地進入狀況。 第一週心得影片 40423245機械設計工程系-協同產品設計實習課程-W1 from 40423245 on Vimeo .","url":"./2017spring-cd-W1.html","tags":"Course"}]};