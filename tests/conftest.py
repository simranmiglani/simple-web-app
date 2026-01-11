import pytest
import os
import sys

# Add project root to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Common test fixtures
@pytest.fixture
def sample_data():
    return {"test": "data"}