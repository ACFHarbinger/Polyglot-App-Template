# libraries/python/flow/tf_model.py
# Simple TensorFlow Keras model example for classification.

import tensorflow as tf
import numpy as np

# 1. Generate dummy dataset (binary classification)
X_train = np.random.rand(1000, 10).astype(np.float32)
y_train = (np.sum(X_train, axis=1) > 5.0).astype(np.int32)

# 2. Build model using Keras Functional API
inputs = tf.keras.Input(shape=(10,))
x = tf.keras.layers.Dense(32, activation='relu')(inputs)
x = tf.keras.layers.Dense(16, activation='relu')(x)
outputs = tf.keras.layers.Dense(1, activation='sigmoid')(x)

model = tf.keras.Model(inputs=inputs, outputs=outputs)

# 3. Compile the model
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss=tf.keras.losses.BinaryCrossentropy(),
    metrics=['accuracy']
)

# 4. Train the model (1 epoch mock run)
print("Training TensorFlow Model...")
history = model.fit(X_train, y_train, epochs=1, batch_size=32, verbose=1)
print("Training completed. Final accuracy:", history.history['accuracy'][-1])
