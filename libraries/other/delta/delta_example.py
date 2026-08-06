# libraries/other/delta/delta_example.py
# Python example demonstrating Delta Lake table reads, writes, and history traversal.

import pandas as pd
from deltalake import DeltaTable, write_deltalake

# 1. Create a pandas dataframe
data = {
    "id": [1, 2, 3],
    "name": ["Alice", "Bob", "Charlie"],
    "role": ["Admin", "User", "Manager"]
}
df = pd.DataFrame(data)

# 2. Write dataframe to a Delta table (creating it if not exists)
table_path = "./tmp/delta-table"
print(f"Writing data to Delta table at: {table_path}...")
write_deltalake(table_path, df, mode="overwrite")

# 3. Read back the Delta table
print("Reading data back from Delta table...")
dt = DeltaTable(table_path)
print("Files in Delta table:", dt.files())

# Convert Delta table back to pandas
df_read = dt.to_pandas()
print("\nDelta Table Data:\n", df_read)

# 4. View history (Time Travel)
print("\nDelta Table History:")
for history in dt.history():
    print(f"Version: {history.get('version')}, Timestamp: {history.get('timestamp')}, Operation: {history.get('operation')}")
