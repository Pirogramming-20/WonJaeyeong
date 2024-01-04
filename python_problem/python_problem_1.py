num = 0

while num <= 31:
  while True:
    try:
      userA_num_input = int(input('부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): '))
      if userA_num_input in [1, 2, 3]:
        break
      else:
        print('1, 2, 3 중 하나를 입력하세요')
    except ValueError:
      print('정수를 입력하세요')

  for i in range(num + 1, num + userA_num_input + 1):
    if i <= 31:
      print(f'playerA : {i}')
      i += 1
    else:
      break

  num += userA_num_input

  if num >= 31:
    break

  while True:
    try:
      userB_num_input = int(input('부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): '))
      if userB_num_input in [1, 2, 3]:
        break
      else:
        print('1, 2, 3 중 하나를 입력하세요')
    except ValueError:
      print('정수를 입력하세요')

  for i in range(num+1, num + userB_num_input + 1):
    if i <= 31:
      print(f'playerA : {i}')
      i += 1
    else:
      break
      
  num += userB_num_input

  if num >= 31:
    break