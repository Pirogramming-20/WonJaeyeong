num = 0

while True:
  try:
    user_num_input = int(input('부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): '))
    if user_num_input in [1, 2, 3]:
      num = user_num_input
      break
    else:
      print('1, 2, 3 중 하나를 입력하세요')
  except ValueError:
    print('정수를 입력하세요')

for i in range(1, num+1):
  print(f'playerA : {i}')
  i += 1



while True:
  try:
    user_num_input = int(input('부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): '))
    if user_num_input in [1, 2, 3]:
      break
    else:
      print('1, 2, 3 중 하나를 입력하세요')
  except ValueError:
    print('정수를 입력하세요')

for i in range(num+1, num + user_num_input + 1):
  print(f'playerB : {i}')
  i += 1