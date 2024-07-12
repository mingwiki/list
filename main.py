import base64

# Read files
with open("_add.txt", "r", encoding="utf-8") as add_file:
    _add = add_file.read().strip()
with open("_delete.txt", "r", encoding="utf-8") as delete_file:
    _delete = delete_file.read().strip()

# Read index.html and decode from base64
with open("index.html", "rb") as index_file:
    _list = base64.b64decode(index_file.read()).decode("utf-8")

# Process _add.txt contents
add_list = [
    line.strip().replace("*.", "||", 1)
    for line in _add.split("\n")
    if line.strip().startswith("*.")
]

# Process _delete.txt contents
delete_list = [
    line.strip().split()[0]
    for line in _delete.split("\n")
    if line.strip().startswith("||")
]

# Combine lists， remove duplicates，then delete items in _delete.txt
final_list = ["[AutoProxy]"] + sorted(
    [
        item
        for item in list(set(_list.split("\n")[1:] + add_list))
        if item not in delete_list and item.count("||") == 1
    ]
)
# Write back to index.html as base64
with open("index.html", "wb") as index_file:
    index_file.write(base64.b64encode("\n".join(final_list).encode("utf-8")))
    print("index.html updated!")

# Clear _add.txt and _delete.txt
with open("_add.txt", "w") as add_file:
    add_file.write("")
    print("_add.txt cleaned!")

with open("_delete.txt", "w") as delete_file:
    delete_file.write("")
    print("_delete.txt cleaned!")
