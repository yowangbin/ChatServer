# import asyncore
# import socket
#
#
# class ChatServer(asyncore.dispatcher):
#     # 调用允许客户端连接的self.accept函数
#     def handle_accept(self):
#         # 返回值套接字、地址
#         client, address = self.accept()
#         # address[0]是客户端的IP地址
#         print('Connection attempt from', address[0])
#
#
# s = ChatServer()
# # 指定所需套接字的类型
# s.create_socket(socket.AF_INET, socket.SOCK_STREAM)
# # 把服务器绑定到具体的主机名和端口上，主机名空代表本机的所有接口
# s.bind(('', 5005))
# # 监听连接，并且指定5个连接的待办事务
# s.listen(5)
# # 启动服务，循环监听
# asyncore.loop()

import socket
import asyncore

PORT = 5005


class ChatServer(asyncore.dispatcher):
    def __init__(self, port):
        asyncore.dispatcher.__init__(self)
        self.create_socket(socket.AF_INET, socket.SOCK_STREAM)
        self.set_reuse_addr()
        self.bind(('', port))
        self.listen(5)

    def handle_accept(self):
        conn, addr = self.accept()
        print('Connection attempt from', addr[0])


if __name__ == '__main__':
    s = ChatServer(PORT)
    try:
        asyncore.loop()
    except KeyboardInterrupt:
        pass
