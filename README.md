# git 常用的操作

1、拉取远程仓库到本地
2、新建本地分支
3、提交本地分支
4、推送本地分支到远程
5、拉取远程分支到本地分支
6、推送本地分支到远程分支
7、合并远程分支
8、解决协作间的分支冲突
9、重置提交 是指在本地分支提交过后 未推送到远程分支的操作
10、提交回滚 是指已经推送到远程分支了 这种操作少操作，因为容易产生大量冲突


# Sourcetree 的使用
如果是githb或者gitlab的账号，可以先登录账号，之后就会有代码的拉取和提交权限。若非大众性的托管服务商
可以使用里面内置的全局账号和邮箱来进行代码的拉取和提交







Container(
                        decoration: BoxDecoration(
                          color: Color.fromRGBO(61, 146, 252, 1),
                          borderRadius: BorderRadius.all(
                            Radius.circular(4),
                          ),
                        ),
                        margin: EdgeInsets.all(10),
                        padding: EdgeInsets.only(
                            top: 20, bottom: 5, left: 15, right: 15),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '王笑笑',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Chip(
                                  label: Text(
                                    "未登记",
                                    style: TextStyle(fontSize: 12),
                                  ),
                                  padding: EdgeInsets.symmetric(horizontal: 5),
                                  backgroundColor:
                                      Colors.cyanAccent.withAlpha(11),
                                  shadowColor: Colors.blue.withAlpha(88),
                                  elevation: 4,
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '手机号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                ),
                                Text(
                                  '17355236373',
                                  style: TextStyle(color: Colors.white),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '身份证号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                ),
                                Text(
                                  '3212212323331233432',
                                  style: TextStyle(color: Colors.white),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '年龄',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                ),
                                Text(
                                  '21',
                                  style: TextStyle(color: Colors.white),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Divider(
                              color: Color.fromRGBO(216, 216, 216, 1),
                              thickness: 0.5,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Icon(
                                  FIcons.fis_diagnostics,
                                  color: Colors.white,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.escalator_sharp,
                                  color: Colors.white,
                                )
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // ),
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // )
                              ],
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                              width: 0.5,
                              color: Color.fromRGBO(216, 216, 216, 1)),
                          borderRadius: BorderRadius.all(
                            Radius.circular(4),
                          ),
                        ),
                        margin: EdgeInsets.all(10),
                        padding: EdgeInsets.only(
                            top: 20, bottom: 5, left: 15, right: 15),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '王笑笑',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Chip(
                                  label: Text(
                                    "未登记",
                                    style: TextStyle(fontSize: 12),
                                  ),
                                  padding: EdgeInsets.symmetric(horizontal: 5),
                                  backgroundColor:
                                      Colors.cyanAccent.withAlpha(11),
                                  shadowColor: Colors.blue.withAlpha(88),
                                  elevation: 4,
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '手机号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '17355236373',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '身份证号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '3212212323331233432',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '年龄',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '21',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Divider(
                              color: Color.fromRGBO(216, 216, 216, 1),
                              thickness: 0.5,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Icon(
                                  FIcons.fis_diagnostics,
                                  // color: Colors.white,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.escalator_sharp,
                                  // color: Colors.white,
                                )
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // ),
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // )
                              ],
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                              width: 0.5,
                              color: Color.fromRGBO(216, 216, 216, 1)),
                          borderRadius: BorderRadius.all(
                            Radius.circular(4),
                          ),
                        ),
                        margin: EdgeInsets.all(10),
                        padding: EdgeInsets.only(
                            top: 20, bottom: 5, left: 15, right: 15),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '王笑笑',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Chip(
                                  label: Text(
                                    "未登记",
                                    style: TextStyle(fontSize: 12),
                                  ),
                                  padding: EdgeInsets.symmetric(horizontal: 5),
                                  backgroundColor:
                                      Colors.cyanAccent.withAlpha(11),
                                  shadowColor: Colors.blue.withAlpha(88),
                                  elevation: 4,
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '手机号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '17355236373',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '身份证号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '3212212323331233432',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '年龄',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '21',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Divider(
                              color: Color.fromRGBO(216, 216, 216, 1),
                              thickness: 0.5,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Icon(
                                  FIcons.fis_diagnostics,
                                  // color: Colors.white,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.escalator_sharp,
                                  // color: Colors.white,
                                )
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // ),
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // )
                              ],
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                              width: 0.5,
                              color: Color.fromRGBO(216, 216, 216, 1)),
                          borderRadius: BorderRadius.all(
                            Radius.circular(4),
                          ),
                        ),
                        margin: EdgeInsets.all(10),
                        padding: EdgeInsets.only(
                            top: 20, bottom: 5, left: 15, right: 15),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '王笑笑',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Chip(
                                  label: Text(
                                    "未登记",
                                    style: TextStyle(fontSize: 12),
                                  ),
                                  padding: EdgeInsets.symmetric(horizontal: 5),
                                  backgroundColor:
                                      Colors.cyanAccent.withAlpha(11),
                                  shadowColor: Colors.blue.withAlpha(88),
                                  elevation: 4,
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '手机号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '17355236373',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '身份证号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '3212212323331233432',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '年龄',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '21',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Divider(
                              color: Color.fromRGBO(216, 216, 216, 1),
                              thickness: 0.5,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Icon(
                                  FIcons.fis_diagnostics,
                                  // color: Colors.white,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.escalator_sharp,
                                  // color: Colors.white,
                                )
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // ),
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // )
                              ],
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(
                              width: 0.5,
                              color: Color.fromRGBO(216, 216, 216, 1)),
                          borderRadius: BorderRadius.all(
                            Radius.circular(4),
                          ),
                        ),
                        margin: EdgeInsets.all(10),
                        padding: EdgeInsets.only(
                            top: 20, bottom: 5, left: 15, right: 15),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '王笑笑',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Chip(
                                  label: Text(
                                    "未登记",
                                    style: TextStyle(fontSize: 12),
                                  ),
                                  padding: EdgeInsets.symmetric(horizontal: 5),
                                  backgroundColor:
                                      Colors.cyanAccent.withAlpha(11),
                                  shadowColor: Colors.blue.withAlpha(88),
                                  elevation: 4,
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '手机号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '17355236373',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '身份证号',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '3212212323331233432',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Row(
                              children: [
                                Container(
                                  width: 65,
                                  child: Text(
                                    '年龄',
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                Text(
                                  '21',
                                  style: TextStyle(),
                                )
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Divider(
                              color: Color.fromRGBO(216, 216, 216, 1),
                              thickness: 0.5,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Icon(
                                  FIcons.fis_diagnostics,
                                  // color: Colors.white,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.escalator_sharp,
                                  // color: Colors.white,
                                )
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // ),
                                // IconButton(
                                //   onPressed: () {},
                                //   icon: Icon(Icons.person_pin_outlined),
                                // )
                              ],
                            )
                          ],
                        ),
                      ),
                   