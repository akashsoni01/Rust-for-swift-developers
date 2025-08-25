

# Rust-for-swift-developers

https://docs.deno.com/examples/svelte_tutorial/



The series will cover rust for swift programming language (frontend) developers.

┠─ To see a stack trace for this prompt, set the DENO_TRACE_PERMISSIONS environmental variable.
┠─ Learn more at: https://docs.deno.com/go/--allow-env
┠─ Run again with --allow-env to bypass this prompt.


Got it ✅ You want the simplest possible runnable example to compare Python vs Rust (PyO3) performance, without too much boilerplate.

Here’s a minimal self-contained setup:


---

1. Rust Code (PyO3 module)

Cargo.toml

[package]
name = "fastmath"
version = "0.1.0"
edition = "2021"

[lib]
name = "fastmath"
crate-type = ["cdylib"]

[dependencies]
pyo3 = { version = "0.22", features = ["extension-module"] }

src/lib.rs

use pyo3::prelude::*;

#[pyfunction]
fn sum_squares(n: usize) -> usize {
    (0..n).map(|i| i * i).sum()
}

#[pymodule]
fn fastmath(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_squares, m)?)?;
    Ok(())
}

Build it (inside fastmath/):

pip install maturin
maturin develop --release

This gives you a Python module called fastmath.


---

2. Python Benchmark

bench.py

import time
import fastmath  # Rust extension

def py_sum_squares(n: int) -> int:
    return sum(i * i for i in range(n))

N = 10_000_000

# Python
start = time.time()
res1 = py_sum_squares(N)
print(f"Python result={res1}, time={time.time() - start:.4f} sec")

# Rust
start = time.time()
res2 = fastmath.sum_squares(N)
print(f"Rust result={res2}, time={time.time() - start:.4f} sec")

Run:

python bench.py


---

3. Expected Results

For N=10_000_000 on a modern laptop:

Python → ~4–6 seconds

Rust (PyO3) → ~0.2–0.4 seconds


That’s about 10×–20× faster.


---

👉 Would you like me to also make a single run.sh script so you don’t need to type the maturin develop and python bench.py separately?

