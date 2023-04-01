def sum_array(arr):
    if arr == None or len(arr) <= 2:
        return 0
    else:
        max_num = arr[0]
        min_num = arr[0]
        for num in arr:
            if num > max_num:
                max_num = num
            if num < min_num:
                min_num = num
        arr.sort()
        arr.pop()
        arr.pop(0)
        return sum(arr)